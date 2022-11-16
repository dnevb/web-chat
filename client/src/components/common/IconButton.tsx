import { FC, HTMLAttributes } from "react";

const IconButton: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} className={`${styles.root} ${props.className}`} />
);

const styles = {
  root: `rounded-full flex justify-center items-center 
cursor-pointer 
active:bg-background-normal`,
};

export default IconButton;
