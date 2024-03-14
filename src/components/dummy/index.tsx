import React from "react";

const Dummy = () => {



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("/api/user", {
            method: "GET",
          });
          const data = res.json()
        console.log(data);
    };
  return <footer>this is dummy card
    <form action="" onSubmit={handleSubmit}><input type="submit" /></form>
  </footer>;
};

export default Dummy;
