import HeaderBox from "@/components/HeaderBox";

const Home = () => {
  const loggedInUser = { firstName: "Shaan" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greetings"
            title="Welcome"
            user={loggedInUser.firstName}
            subtext="Access and manage your account and transactions efficiently"
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
