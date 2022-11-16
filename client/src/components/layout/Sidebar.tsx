import TablerUser from "~icons/tabler/user";

const data = [
  {
    id: "hecab",
    type: "t",
    name: "ded",
    last: {
      content: "hi",
      date: Date.now(),
    },
  },
  {
    id: "cban",
    type: "t",
    name: "isaac",
    photo:
      "https://pps.whatsapp.net/v/t61.24694-24/310726031_851381092815259_4260650859799488526_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdR70m0tD7MOYAFtXpChv6_FoYkCNR7js87iHDacIUc3sA&oe=637F9DDC",
    last: {
      content: "?",
      date: Date.now(),
    },
  },
];

const Sidebar = (props: any) => (
  <div className={styles.root}>
    {data.map((item) => (
      <div key={item.id} className={styles.row}>
        <div className={styles.avatar}>
          {!item.photo && <TablerUser />}
          {item.photo && <img src={item.photo} className="rounded-full" />}
        </div>
        <div className="flex flex-col items-center">
          <h4>{item.name}</h4>
          <p>{item.last.content}</p>
        </div>
      </div>
    ))}
  </div>
);

const styles = {
  root: `bg-background-normal h-full overflow-y-auto
  hidden md:(wsm block) lg:wmd
  rounded-tl-2xl rounded-bl-2xl`,
  row: `h18 p2 cursor-pointer 
  flex items-center 
  hover:bg-background-light`,
  avatar: `h14 w14 rounded-full bg-gray`,
};

export default Sidebar;
