import pic1 from "./pages/Photos/catshelterwa.jpg";
import pic2 from "./pages/Photos/max.jpg";
import pic3 from "./pages/Photos/zues.jpg";
import pic4 from "./pages/Photos/parrots.jpg";
import pic5 from "./pages/Photos/alice.jpg";
import pic6 from "./pages/Photos/frank.jpg";
import pic7 from "./pages/Photos/Tilly.jpg";

export const allProjects = [
  {
    id: 1,
    title: "Cat Shelter WA",
    description:
      "Help fund Cat Shelter WA. This season we have had over 650 cats and kittens come through our shelter. With such a small team, we need help funding to keep our felines vaccinated.",
    goal: 1500,
    image: pic1,
    is_open: true,
    date_created: "2020-03-20T14:22:23.382748Z",
    owner: 1,
  },
  {
    id: 2,
    title: "Cat Haven WA",
    description:
      "Kitten season is upon us and we need help creating more space to occupy more fur babies! We are looking to help fund more housing space for the huge intake that we've had this year.",
    goal: 900,
    image: pic2,
    is_open: true,
    date_created: "2020-03-20T18:28:23.382748Z",
    owner: 1,
  },
  {
    id: 3,
    title: "Foster 4 Paws",
    description:
      "Foster 4 Paws is a non for-profit organisation that is devoted to helping out every paw. Due to being a non for-profit we attempt to provide as much as we can for our fur tenants but we need your help. If you have anything to donate in terms of food, toys, animal bedding or just a dollar amount donation, we would be so grateful for your help... and so would our foster paws!",
    goal: 2000,
    image: pic3,
    is_open: true,
    date_created: "2020-02-20T14:28:23.382748Z",
    owner: 1,
  },
  {
    id: 4,
    title: "For The Love of Beaks",
    description:
      "We are reaching out to you today on behalf of our foster care clinic's avian residents. Our clinic provides essential care and rehabilitation for birds in need, and we rely on the generosity of animal lovers like you to continue our vital work. With your support, we can provide our feathered friends with nutritious food, clean habitats, and specialized medical attention when necessary. Any donation, no matter how small, makes a big difference in the lives of these beautiful creatures.",
    goal: 3000,
    image: pic4,
    is_open: true,
    date_created: "2020-03-20T14:28:23.382748Z",
    owner: 2,
  },
  {
    id: 5,
    title: "Pawsitive Changes",
    description:
      "Our foster care clinic is dedicated to helping cats in need find loving homes and providing them with the care they require in the meantime. We rely on the kindness of animal lovers like you to keep our cat residents healthy and happy. With your support, we can provide these feline friends with high-quality food, clean litter boxes, and medical attention when necessary. Your gift can help ensure that each cat in our care receives the care and love they deserve.",
    goal: 850,
    image: pic5,
    is_open: true,
    date_created: "2019-03-20T12:28:23.382748Z",
    owner: 2,
  },
  {
    id: 6,
    title: "AllPaws Foundation",
    description:
      "We are reaching out to you today on behalf of all the animals in our foster care clinic's care. We are committed to providing a safe and loving environment for every animal who comes through our doors, and we rely on the kindness of animal lovers like you to continue our important work. With your support, we can provide essential care to every resident, including nutritious food, clean habitats, and medical attention when necessary. Your gift can make a significant difference in the lives of these animals, and we are grateful for any contribution you can make to our clinic's animal fund.",
    goal: 3000,
    image: pic6,
    is_open: true,
    date_created: "2020-03-20T14:28:23.382748Z",
    owner: 1,
  },
  {
    id: 7,
    title: "Paws & Pensioners",
    description:
      "Our foster care clinic is dedicated to providing a loving and comfortable environment for senior animals in need until they find their forever homes. We believe that every animal deserves a warm and caring home, no matter their age. We rely on the generosity of animal lovers like you to keep our senior animal residents healthy and happy. With your support, we can provide these furry friends with high-quality food, comfortable bedding, and medical attention when necessary. Your donation can help ensure that each senior animal in our care receives the love and attention they need to live out their golden years in comfort.",
    goal: 2200,
    image: pic7,
    is_open: true,
    date_created: "2020-02-20T14:28:23.382748Z",
    owner: 2,
  },
];

export const oneProject = {
  id: 1,
  title: "Project One",
  description: "The first project.",
  goal: 150,
  image: "https://via.placeholder.com/300.jpg",
  is_open: true,
  date_created: "2020-03-20T14:22:23.382748Z",
  owner: 1,
  pledges: [
    {
      id: 1,
      amount: 100,
      comment: "A comment for the pledge",
      anonymous: false,
      supporter: 3,
      project_id: 1,
    },
  ],
};
