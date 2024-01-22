interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className=" bg-secondary-blue min-h-screen min-w-full p-6">
      {children}
    </div>
  );
};

export default Layout;
