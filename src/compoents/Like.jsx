import { useState } from "react";
function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <>
      <p>จำนวนไลก์: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>ถูกใจ</button>
      <button onClick={() => setLikes(0)}>รีเซ็ต</button>
    </>
  );
}
export default LikeButton;
