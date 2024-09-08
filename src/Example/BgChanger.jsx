import { useState } from "react";

export default function BgChanger() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          width: "100%",
          height: "100vh",
        }}
      >
        <button
          onClick={() => setColor("red")}
          style={{
            width: "50px",
            height: "20px",
            borderRadius: "6px",
          }}
        >
          Red
        </button>

        <button
          onClick={() => setColor("blue")}
          style={{
            width: "50px",
            height: "20px",
            borderRadius: "6px",
          }}
        >
          Blue
        </button>

        <button
          onClick={() => setColor("green")}
          style={{
            width: "50px",
            height: "20px",
            borderRadius: "6px",
          }}
        >
          Green
        </button>

        <button
          onClick={() => setColor("yellow")}
          style={{
            width: "50px",
            height: "20px",
            borderRadius: "6px",
          }}
        >
          Yellow
        </button>

        <button
          onClick={() => setColor("violet")}
          style={{
            width: "50px",
            height: "20px",
            borderRadius: "6px",
          }}
        >
          Violet
        </button>

        <button
          onClick={() => setColor("orange")}
          style={{
            width: "52px",
            height: "20px",
            borderRadius: "6px",
          }}
        >
          Orange
        </button>

        <button
          onClick={() => setColor("#FE6F5E")}
          style={{
            width: "80px",
            height: "20px",
            borderRadius: "6px",
          }}
        >
          Bittersweet
        </button>

        <button
          onClick={() => setColor("#F88379")}
          style={{
            width: "80px",
            height: "20px",
            borderRadius: "6px",
          }}
        >
          Coral Pink
        </button>

        <button
          onClick={() => setColor("#7DF9FF")}
          style={{
            width: "50px",
            height: "20px",
            borderRadius: "6px",
          }}
        >
          Celeste
        </button>

        <button
          onClick={() => setColor("white")}
          style={{
            width: "50px",
            height: "20px",
            borderRadius: "6px",
          }}
        >
          White
        </button>
      </div>
    </>
  );
}
