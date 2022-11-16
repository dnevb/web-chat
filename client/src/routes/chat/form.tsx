import { useState } from "react";
import TablerMicrophone from "~icons/tabler/microphone";
import MoodSmile from "~icons/tabler/mood-smile";
import Send from "~icons/tabler/send";
import IconButton from "../../components/common/IconButton";

const ChatForm = () => {
  const [text, setText] = useState("");

  return (
    <div className={styles.root}>
      <IconButton className={styles.emotes}>
        <MoodSmile />
      </IconButton>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.input}
        placeholder="Type here"
      />
      {text && (
        <IconButton className={styles.emotes}>
          <Send />
        </IconButton>
      )}
      {!text && (
        <IconButton className={styles.emotes}>
          <TablerMicrophone />
        </IconButton>
      )}
    </div>
  );
};

const styles = {
  root: `flex gap2 items-center px4 h16`,
  emotes: `h10 w10 p1.5`,
  input: `grow rounded-lg p4 bg-background-normal h12 outline-none
  resize-none leading-none`,
};

export default ChatForm;
