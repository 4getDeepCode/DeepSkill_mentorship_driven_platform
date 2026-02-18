import booking from "@/aipManager/booking";
import Layout from "@/components/Layout";
import { Button, Spin, Table, Tag } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming"); // 'upcoming' or 'past'

  const fetchBookings = async () => {
    setLoading(true);
    const res = await booking.getMentorBookings();
    setBookings(res?.data?.bookings);
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handlePayNow = (bookingId) => {
    // handle payment logic for the booking
  };

  // Filter bookings based on active tab
  const filteredBookings = bookings.filter((booking) => {
    if (activeTab === "upcoming") {
      return moment(booking.dateAndTime).isAfter(moment()); // Future bookings
    } else {
      return moment(booking.dateAndTime).isBefore(moment()); // Past bookings
    }
  });

  const columns = [
    {
      title: "Date",
      dataIndex: "dateAndTime",
      key: "dateAndTime",
      render: (text) => moment(text).format("DD MMM YYYY, hh:mm A"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "completed" ? "green" : "orange"}>{status}</Tag>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `₹${price}`,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) =>
        record.status === "pending" ? (
          <Button
            type="primary"
            style={{ backgroundColor: "#FFA500", borderColor: "#FFA500" }}
            onClick={() => handlePayNow(record._id)}
          >
            Pay Now
          </Button>
        ) : (
          <Tag color="blue">Paid</Tag>
        ),
    },
  ];

  return (
    <Layout>
      <div className="container p-4 mx-auto">
        <h2 className="text-2xl font-bold text-orange-600">Your Bookings</h2>
        <div className="flex my-4 space-x-4">
          <Button
            type={activeTab === "upcoming" ? "primary" : "default"}
            onClick={() => setActiveTab("upcoming")}
            style={{
              backgroundColor: activeTab === "upcoming" ? "#FFA500" : "#fff",
              color: activeTab === "upcoming" ? "#fff" : "#FFA500",
              borderColor: "#FFA500",
            }}
          >
            Upcoming Bookings
          </Button>
          <Button
            type={activeTab === "past" ? "primary" : "default"}
            onClick={() => setActiveTab("past")}
            style={{
              backgroundColor: activeTab === "past" ? "#FFA500" : "#fff",
              color: activeTab === "past" ? "#fff" : "#FFA500",
              borderColor: "#FFA500",
            }}
          >
            Past Bookings
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center my-4">
            <Spin size="large" />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={filteredBookings}
            pagination={{ pageSize: 5 }}
            rowKey={(record) => record._id}
            style={{
              backgroundColor: "#f8f8f8",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        )}
      </div>
    </Layout>
  );
};

export default BookingDetails;
