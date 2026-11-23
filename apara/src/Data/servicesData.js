import advisory from "../assets/home/Advisory-Services.webp";
import design from "../assets/home/Design-Project-Management.webp";
import management from "../assets/home/Hotel-Management.webp";
import asset from "../assets/home/Asset-mang.webp";

// All service content is here. To add, remove or edit a card, change only this list.
export const servicesData = [
    {
        id: 1,
        title: "Hotel Advisory",
        text: "Informed investment, brand and operator decisions at every turning point.",
        image: advisory,
        link: "/services",
    },
    {
        id: 2,
        title: "Hotel Design and Project Management",
        text: "Thoughtful design and disciplined delivery, grounded in operational reality.",
        image: design,
        link: "/services",
    },
    {
        id: 3,
        title: "Hotel Management",
        text: "Hands-on hotel operations, aligned with the priorities of ownership.",
        image: management,
        link: "/services",
    },
    {
        id: 4,
        title: "Hotel Asset Management",
        text: "An ownership perspective on performance, profitability and long-term asset value.",
        image: asset,
        link: "/services",
    },
]