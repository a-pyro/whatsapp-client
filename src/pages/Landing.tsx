import { MessageBox } from 'react-chat-elements';
import { SideBar } from 'react-chat-elements';
import Login from './Login';

const Landing = () => {
  return (
    <div>
      <SideBar
        top={<div>'TOP' area</div>}
        center={<div> hi</div>}
        bottom={<div>'BOTTOM' area</div>}
      />
    </div>
  );
};

export default Landing;
