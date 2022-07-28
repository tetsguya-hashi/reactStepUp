import { memo } from "react";
import './style.scss';
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
}

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log('ChildAreaがレンダリングされた');
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('kkkk')
  })
  console.log(data);
  return (

    <div className="" style={style}>
      <div >
        {open ? (
          <div>
            <p>子コンポーネント</p>
            <button onClick={onClickClose}>閉じる</button>
          </div>
        ) : null}
      </div>

    </div>
  );
});