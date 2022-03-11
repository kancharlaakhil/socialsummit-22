import React from "react";
import "./Committes.css";

import image1 from "./assets/UNHCR.png";
import image2 from "./assets/UNCSW.png";
import image3 from "./assets/LokSabha.png";

import Committe from "./components/Committe";

function MUN() {
  const data = [
    {
      id: 1,
      name: "United Nations High Commissioner for Refugees",
      image: image1,
      description:
        "The United Nations High Commissioner for Refugees is one of the three committees that will be a part of the discussion in MUN. Mandation is to aid and protect refugees, forcibly displaced communities, and stateless people, and to assist in their voluntary repatriation, local integration or resettlement to the third nation.",
    },
    {
      id: 2,
      name: "United Nations High Commissioner for Refugees",
      image: image2,
      description:
        "The United Nations Commission on the Status of Women is one of the third committees that will be part of the discussion in MUN. It is one of the main UN organs and has been described as the UN organ promoting gender equality and the empowerment of women. Being a benefactor of women’s rights, this committee will focus on deliberation on the situation of women in middle east countries.",
    },
    {
      id: 3,
      name: "United Nations High Commissioner for Refugees",
      image: image3,
      description:
        "Lok Sabha is the third committee that will be a part of the discussion in MUN. Members of the Lok Sabha are elected by adult universal suffrage and a first-past-the-post system to represent their respective constituencies. This committee will be discussing the viability of cryptocurrencies as a legal tender.",
    },
  ];

  return (
    <div>
      <div className="committes">
        {data.map((element) => {
          return (
            <Committe
              key={element.id}
              image={element.image}
              description={element.description}
              name={element.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MUN;
