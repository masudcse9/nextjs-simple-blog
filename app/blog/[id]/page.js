"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [content, setContent] = useState([]);
  const [date, setDate] = useState('');

  const params = useParams();
  const id = params["id"];
  console.log(id);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://basic-blog.teamrabbil.com/api/post-details/${id}`
      );
      const data = await res.json();
      setContent(data["postDetails"]);
      //let dateSet = new Date(data["postDetails"]['created_at']);
      //setDate(dateSet);        

    })();
  }, [id]);

  return (
    <div>
      <div className="container mx-auto pr-10 pl-10 pt-20 pb-3 flex flex-row">
        <div class="grid grid-rows-6 grid-flow-col gap-4">
          <div>
            <div className="card card-compact w-100 bg-base-100 shadow-xl">
              <figure>
                <img src={content.img} alt={content.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{content.title}</h2>
                <p>Post Date : {content.created_at}</p>
                <p>{content.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
