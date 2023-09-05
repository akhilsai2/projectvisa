import React from "react";
import { Dialog } from "primereact/dialog";
import FormDataMobile from "./formmobile";

const Dialogbox = (props) => {
  const [visible, setVisible] = React.useState(false);
  // React.useEffect(() => {
  //   setVisible(true);
  // }, []);
  return (
    <div className="mobile-form">
      <p>
        For More Information submit this form :{" "}
        <a
          className="text-primary text-decoration-underline"
          onClick={() => setVisible(true)}
        >
          FormLink
        </a>
      </p>
      <Dialog
        header="More Information"
        visible={visible}
        style={{ width: "95vw" }}
        position="right"
        onHide={() => setVisible(!visible)}
      >
        <FormDataMobile subject={props.subject} value={props.value} />
      </Dialog>
    </div>
  );
};

export default Dialogbox;
