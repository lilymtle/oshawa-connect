interface FAQsDataProps {
    id: number;
    category?: string;
    path?: string;
    question?: string;
    answer?: string;
};

export const FAQsCard: FAQsDataProps[] = [
    {
        id: 1,
        category: "Using Oshawa Connect",
        path: "/"
    },
    {
        id: 2,
        category: "Local Events",
        path: "/"
    },
    {
        id: 3,
        category: "Businesses & Shops",
        path: "/"
    },
    {
        id: 4,
        category: "Community Resources",
        path: "/"
    },
    {
        id: 5,
        category: "Getting Involved",
        path: "/"
    }
];

export const FAQs: FAQsDataProps[] = [
    {
        id: 1,
        category: "Using Oshawa Connect",
        question: "Question",
        answer: "Answer",

    },
        {
        id: 2,
        category: "Local Events",
        question: "Question",
        answer: "Answer",

    },
        {
        id: 3,
        category: "Businesses & Shops",
        question: "Question",
        answer: "Answer",

    },
        {
        id: 4,
        category: "Community Resources",
        question: "Question",
        answer: "Answer",

    },
        {
        id: 5,
        category: "Get Involved",
        question: "Question",
        answer: "Answer",
    }
]