import userAPI from "@/aipManager/user";
import useUserStore from "@/store/user";
import { Avatar, Button, Form, Input, message, Modal, Spin } from "antd";
import React, { useRef, useState } from "react";
import Dashboard from "./Dashboard";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Profile = () => {
  const { setUser, user: mentorData } = useUserStore();
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append("photo", file);

      try {
        const response = await userAPI.uploadImage(formData);
        setUser({ ...mentorData, photoUrl: response.data.photoUrl });
      } catch (error) {
        console.error("Image upload failed", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSubmit = async (values) => {
    const updatedUserData = {
      tags: values.skills.split(",").map((tag) => tag.trim()),
      title: values.title,
      bio: values.bio,
      college: values.college,
      social: {
        linkedin: values.social?.linkedin,
        github: values.social?.github,
        twitter: values.social?.twitter,
        facebook: values.social?.facebook,
        instagram: values.social?.instagram,
      },
    };

    try {
      setLoading(true);

      await userAPI.updateUser(updatedUserData);

      //  Fetch updated user after update
      const updatedUserResponse = await userAPI.getUser();

      //  Update Zustand properly
      setUser(updatedUserResponse.data.user);

      message.success("Profile updated successfully!");

      setIsEditing(false);
    } catch (error) {
      console.error("Profile update failed", error);
      message.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Generate avatar from initials
  const generateAvatarUrl = (name) => {
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
    return `https://ui-avatars.com/api/?name=${initials}&background=random&color=fff&size=256`;
  };

  return (
    <Dashboard>
      <div className="flex flex-col items-center w-full min-h-screen p-10 bg-gradient-to-b from-green-950 via-green-900 to-green-950">
        <h2 className="mb-10 text-5xl font-bold text-center text-yellow-300">
          My Profile
        </h2>

        <div className="flex flex-col w-full max-w-5xl p-10 space-y-8 bg-green-900/40 backdrop-blur-md border border-yellow-400/20 shadow-[0_0_40px_rgba(250,204,21,0.15)] rounded-2xl">
          <Spin spinning={loading}>
            <div className="flex justify-center">
              <Avatar
                onClick={() => !loading && inputRef.current.click()}
                size={170}
                src={
                  mentorData?.photoUrl ||
                  generateAvatarUrl(mentorData?.name || "User")
                }
                className="border-4 border-yellow-400/40 shadow-[0_0_25px_rgba(250,204,21,0.3)] cursor-pointer hover:scale-105 transition"
              />
            </div>
          </Spin>

          <div className="text-center">
            <h3 className="text-4xl font-semibold text-yellow-300">
              {mentorData?.name}
            </h3>

            <p className="flex items-center justify-center mt-4 text-yellow-200/80">
              <AiOutlineMail className="mr-2 text-yellow-400" />
              {mentorData?.email}
            </p>

            <p className="flex items-center justify-center mt-2 text-yellow-200/80">
              <AiOutlineUser className="mr-2 text-yellow-400" />
              {mentorData?.profile?.title}
            </p>

            <p className="mt-3 text-yellow-200/70">
              <span className="text-yellow-300 font-medium">Tags:</span>{" "}
              {mentorData?.profile?.tags?.join(", ")}
            </p>

            <p className="mt-3 text-yellow-200/70">
              <span className="text-yellow-300 font-medium">Bio:</span>{" "}
              {mentorData?.profile?.bio}
            </p>

            {mentorData?.profile?.college && (
              <p className="mt-3 text-yellow-200/70">
                <span className="text-yellow-300 font-medium">College:</span>{" "}
                {mentorData?.profile?.college}
              </p>
            )}
          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            disabled={loading}
          />

          <h3 className="text-2xl font-semibold text-center text-yellow-300 mt-6">
            Connect with Me
          </h3>

          <div className="flex justify-center mt-4 space-x-6">
            <AiFillLinkedin className="text-3xl text-yellow-300 hover:text-yellow-400 transition cursor-pointer" />
            <AiFillGithub className="text-3xl text-yellow-300 hover:text-yellow-300 transition cursor-pointer" />
            <AiFillTwitterCircle className="text-3xl text-yellow-300 hover:text-yellow-400 transition cursor-pointer" />
            <AiFillFacebook className="text-3xl text-yellow-300 hover:text-yellow-400 transition cursor-pointer" />
            <AiFillInstagram className="text-3xl text-yellow-300 hover:text-yellow-400 transition cursor-pointer" />
          </div>

          <Button
            type="primary"
            className="w-full mt-8 text-lg font-semibold bg-yellow-400 text-green-950 hover:bg-yellow-300 border-none rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.4)]"
            onClick={handleEditProfile}
          >
            Edit Profile
          </Button>

          <Modal
            title={<span className="text-black ">Edit Profile</span>}
            open={isEditing}
            onCancel={() => setIsEditing(false)}
            footer={null}
          >
            <Form
              initialValues={{
                name: mentorData?.name,
                email: mentorData?.email,
                title: mentorData?.profile?.title,
                skills: mentorData?.profile?.tags?.join(", "),
                bio: mentorData?.profile?.bio,
                college: mentorData?.profile?.college,
                social: mentorData?.social,
              }}
              onFinish={handleSubmit}
              layout="vertical"
            >
              <Form.Item label="Title" name="title">
                <Input />
              </Form.Item>

              <Form.Item label="Skills" name="skills">
                <Input />
              </Form.Item>

              <Form.Item label="Bio" name="bio">
                <Input.TextArea rows={3} />
              </Form.Item>

              <Form.Item label="College" name="college">
                <Input />
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  className="w-full bg-yellow-400 text-green-950 hover:bg-yellow-300 font-semibold rounded-lg"
                >
                  Save Changes
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
    </Dashboard>
  );
};

export default Profile;
