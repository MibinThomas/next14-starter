import styels from "./contact.module.css";
import Image from "next/image";
const contact = () => {
  return(
  <div className={styels.container}>
    <div className={styels.imgContainer}>
      <Image src="/contact.svg" alt="" fill className={styels.img} />
    </div>
    <div className={styels.formContainer}>
    <form action="" className={styels.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
    </div>
  </div>) ;
};

export default contact;