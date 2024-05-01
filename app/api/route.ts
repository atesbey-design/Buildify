import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  //console.log(process.env.EDENAI_API_KEY)
  const res = await fetch("https://api.edenai.run/v2/text/code_generation", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzRlYzkzMTktMWJhMC00YmM1LWFhODEtNWRhNzY2YjVlNWM3IiwidHlwZSI6ImFwaV90b2tlbiJ9.gMKJohWm-S_nTN8QaYbLupDsglPd-p2bST_zDaeLWT8",
    },
    body: JSON.stringify({
      response_as_dict: true,
      attributes_as_list: false,
      show_original_response: false,
      temperature: 0,
      max_tokens: 1000,
      instruction:
       "     You are an excellent React and Tailwindcss coder. Write your code on a single page. just do what you are told, just write the code and don't write any comments or sentences. Give the output of the code in code format only and only. NEVER, NEVER, NEVER USE '''JSX FORMAT''' at the beginning and at the end. NEVER, NEVER, NEVER write code in '''JSX format'''.WRITE ONLY IN REACT AND TAILWIND FORMAT. DO NOT CREATE AN ADDITIONAL STRUCTURE BUT WRITE THE WHOLE STRUCTURE UNDER APP.JS If you need an image element in the code, use an image available on the internet with a ready-made image urli .Do not give it in code format Do not make any explanation    ",
          
         prompt: `${text.query}`,
      providers: "openai",

    }),
  });
  const data = await res.json();
  console.log(data);

  return NextResponse.json(data.openai.generated_text);
}