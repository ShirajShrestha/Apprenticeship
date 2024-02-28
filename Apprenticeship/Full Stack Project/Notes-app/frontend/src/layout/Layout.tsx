interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className=" bg-secondary-blue  p-6 md:max-w-md m-auto">{children}</div>
  );
};

export default Layout;
