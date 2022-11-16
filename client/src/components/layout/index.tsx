import { FC } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  sidebarSlot?: JSX.Element;
  contentSlot?: JSX.Element;
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Sidebar>{props.sidebarSlot}</Sidebar>
        {props.contentSlot}
      </div>
    </div>
  );
};

const styles = {
  container: `bg-background-dark h-screen overflow-hidden py-1/36 px-4`,
  body: `bg-background-light rounded-2xl max-w-6xl mx-auto h-full flex`,
};

export default Layout;
