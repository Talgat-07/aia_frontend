export const path = {
    home: '/',
    aboutUs: '/about-us',
    realizeProjects: '/realize-projects',
    architectureProjects: '/architecture-projects',
    privateArchitecture: '/architecture-projects/private',
    publicArchitecture: '/architecture-projects/public',
    blocksArchitecture: '/architecture-projects/blocks',
    interiorDesign: '/interior-design',
    houseDesignPage: '/interior-design/house-design',
    apartmentDesignPage: '/interior-design/apartment-design',
    publicSpacesInterior: '/interior-design/public-spaces',
    costAndStages: '/cost-and-stages',
    blog: '/blog',
    blogOpen: 'blog-open',
    contacts: '/contact-us',
    projectCard: '/project-card',
    cottageVillageCard: '/cottage-village-card',
};

export const NavLinks = [
    {
        title: 'Главная страница',
        path: path.home,
        children: null,
    },
    {
        title: 'О студии',
        path: path.aboutUs,
        children: null,
    },
    {
        title: 'Реализованные проекты',
        path: path.realizeProjects,
        children: null,
    },
    {
        title: 'Архитектурное проектирование',
        path: path.architectureProjects,
        children: [
            {
                title: 'Частные дома',
                path: path.privateArchitecture,
            },
            {
                title: 'Общественные здания',
                path: path.publicArchitecture,
            },
            {
                title: 'Поселки и кварталы',
                path: path.blocksArchitecture,
            },
        ],
    },
    {
        title: 'Дизайн интерьера',
        path: path.interiorDesign,
        children: [
            {
                title: 'Дизайн домов',
                path: path.houseDesignPage,
            },
            {
                title: 'Дизайн квартир',
                path: path.apartmentDesignPage,
            },
            {
                title: 'Дизайн общественных пространств',
                path: path.publicSpacesInterior,
            },
        ],
    },
    {
        title: 'Карточка проекта',
        path: path.projectCard,
        children: null,
    },
    {
        title: 'Стоимость и этапы строительства',
        path: path.costAndStages,
        children: null,
    },
    {
        title: 'Карточка коттеджного поселка',
        path: path.cottageVillageCard,
        children: null,
    },
    {
        title: 'Блог',
        path: path.blog,
        children: null,
    },
    {
        title: 'Контакты',
        path: path.contacts,
        children: null,
    },
];

export const BreadCrumbData = [
    {
        link: path.home,
        label: "Главная "
    },
    {
        link: path.aboutUs,
        label: "О студии"
    },
    {
        link: path.realizeProjects,
        label: "Реализованные проекты"
    },
    {
        link: path.architectureProjects,
        label: "Архитектурные проекты"
    },
    {
        link: path.privateArchitecture,
        label: "Частные дома"
    },
    {
        link: path.publicArchitecture,
        label: "Общественные здания"
    },
    {
        link: path.blocksArchitecture,
        label: "Посёлки и кварталы"
    },
    {
        link: path.interiorDesign,
        label: "Дизайн интерьера"
    },
    {
        link: path.houseDesignPage,
        label: "Дизайн домов и котеджей"
    },
    {
        link: path.apartmentDesignPage,
        label: "Дизайн квартир"
    },
    {
        link: path.publicSpacesInterior,
        label: "Дизайн общественных пространств"
    },
    {
        link: path.costAndStages,
        label: "Стоимость и этапы строительства"
    },
    {
        link: path.blog,
        label: "Блог"
    },
    {
        link: path.contacts,
        label: "Контакты"
    },
    {
        link: path.projectCard,
        label: "Проект"
    }
];