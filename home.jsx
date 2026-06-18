import NotificationCard from "../components/NotificationCard";

function Home() {
  const notifications = [
    {
      id: 1,
      type: "Placement",
      message: "Amazon Hiring Drive"
    },
    {
      id: 2,
      type: "Result",
      message: "Semester Results Published"
    },
    {
      id: 3,
      type: "Event",
      message: "Hackathon Tomorrow"
    }
  ];

  return (
    <div className="container">
      <h1 className="title">Priority Inbox Notification System</h1>

      {notifications.map((item) => (
        <NotificationCard
          key={item.id}
          notification={item}
        />
      ))}
    </div>
  );
}

export default Home;