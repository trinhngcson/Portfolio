import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { toast } from "react-toastify";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      toast.success("Contact Has Been Sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };
  console.log(import.meta);
  return (
    <div className="max-w-7xl mx-auto glass" id="contact">
      <div className="mx-auto max-w-[600px] text-center p-6">
        <h2 className="text-gray-500 text-3xl md:text-5xl mb-4 font-bold">
          Let&apos;s connect
        </h2>
        <p className="text-gray-500 text-xl">
          and start working on amazing things
        </p>
      </div>

      <div className="flex justify-center ">
        <div className="my-auto text-purple-900">
          <a href="https://www.facebook.com/trinhngoc.sonn/">
            <AiFillFacebook className="w-[100px] h-auto mb-4" />
          </a>
          <a href="https://github.com/trinhngcson">
            <AiFillGithub className="w-[100px] h-auto mb-4" />
          </a>
        </div>
        <div className="p-6 max-w-6xl">
          <h2 className="mb-4 text-2xl font-bold text-gray-400">Contact Me</h2>
          <form onSubmit={onSubmit}>
            <div className="space-y-4 mb-6">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name ..."
                className="w-full border-gray-400 py-2 px-4 border rounded-md"
              ></input>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address ..."
                className="w-full border-gray-400 py-2 px-4 border rounded-md"
              ></input>
              <textarea
                type="textarea"
                name="message"
                placeholder="Your message ..."
                className="w-full border-gray-400 py-2 px-4 border rounded-md"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-purple-700 px-6 max-w-md py-3 rounded-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
