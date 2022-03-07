const Dashboard: React.FC = () => {
  return <div>Dashboard</div>;
};

export function getStaticProps() {
  return {
    props: {
      protected: false,
    },
  };
}

export default Dashboard;
