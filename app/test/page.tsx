"use client";

import { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        const btn = document.querySelector("button");
        const txt = document.querySelector("p");
        const div = document.querySelector("div");
        let input: HTMLInputElement;

        if (btn !== null) {
            btn.addEventListener("click", updateBtn);
        }

        function updateBtn() {
            if (btn && txt && div) {
                if (btn.textContent === "Start machine") {
                    btn.textContent = "Stop machine";
                    txt.textContent = "The machine has started!";
                    input = document.createElement("input");
                    input.type = "text";
                    input.id = "input";
                    div.appendChild(input);
                } else {
                    btn.textContent = "Start machine";
                    txt.textContent = "The machine is stopped.";
                    div.removeChild(input);
                }
            }
        }

        return (() => {
            if (btn && btn.parentNode ) {
                btn.removeEventListener("click", updateBtn);
            }
            if (div && input) {
                div.removeChild(input);
            }
        });
    });

    return (
        <div className="flex flex-col items-center p-6 gap-3">
            <button className="border-2 border-black rounded-xl p-1"
            >Start machine
            </button>
            <p>The machine is stopped.</p>
        </div>
    );
}