const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    photoUrl: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    password: {
      type: String,
      required: true,
      select: false,
      minlength: 6,
    },

    verified: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ["mentor", "student", "admin"],
      default: "student",
    },

    profile: {
      tags: {
        type: [String],
        default: [],
      },

      title: {
        type: String,
        default: "",
      },

      bio: {
        type: String,
        default: "",
      },

      college: {
        type: String,
        default: "",
      },

      social: {
        linkedin: { type: String, default: "" },
        github: { type: String, default: "" },
        twitter: { type: String, default: "" },
        facebook: { type: String, default: "" },
        instagram: { type: String, default: "" },
      },
    },
  },
  { timestamps: true }
);



//  Compare Password Method
userSchema.methods.isPasswordMatch = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};



//  Hash Password Before Save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
});



const UserModel = model("User", userSchema);

module.exports = UserModel;
