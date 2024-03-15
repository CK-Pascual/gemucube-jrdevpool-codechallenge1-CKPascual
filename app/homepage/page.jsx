import UserInfo from "@/components/UserInfo";

export default function Dashboard() {
  return (
    <div>
      <div className="Logo" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Homepage</h1>
      </div>
      <UserInfo />
    </div>
  );
}