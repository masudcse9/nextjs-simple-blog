"use client";
import Link from "next/link";
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from "react";

const page = () => {
  const [content, setContent] = useState([]);
  const params = useParams();
  const id = params['id'];

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://basic-blog.teamrabbil.com/api/post-list/${id}`
      );
      const data = await res.json();
      setContent(data);
      //console.log(data);
    })();
  }, [id]);

  return (
    <div>
      <div className="container mx-auto pt-20 pb-3 flex flex-row">
        <div class="grid gap-x-8 gap-y-4 grid-cols-3">
          {content.map((data, index) => {
            return (
              <div>
                <Link
                  key={index}
                  href={`/blog/${data.id}`}
                  className="card card-compact w-70 bg-base-100 shadow-xl"
                >
                  <figure>
                    <img src={data.img} alt={data.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{data.title}</h2>
                    <p>{data.short}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
