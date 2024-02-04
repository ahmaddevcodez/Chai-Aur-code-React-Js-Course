import { useState } from "react";
import { useParams } from "react-router-dom";
// import Header from "./components/Header/Header";

export default function User() {
  const { userid } = useParams();
  return (
    <div
      className="text-6xl flex justify-center align-middle pt-20 pb-20
    "
    >
      User: {userid}
    </div>
  );
}
