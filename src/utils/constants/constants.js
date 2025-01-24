
export const path = {
    home: '/',
    aboutUs: '/about-us',
    realizeProjects: '/realize-projects',
    architectureProjects: '/architecture-projects',
    privateArchitecture: '/architecture/private',
    publicArchitecture: '/architecture/public',
    blocksArchitecture: '/architecture/blocks',
    interiorDesign: '/interior-design',
    housesInterior: '/interior/houses',
    apartmentsInterior: '/interior/apartments',
    publicSpacesInterior: '/interior/public-spaces',
    costAndStages: '/cost-and-stages',
    blog: '/blog',
    contacts: '/contact-us',
    projectCard: '/project-card'
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
                path: path.housesInterior,
            },
            {
                title: 'Дизайн квартир',
                path: path.apartmentsInterior,
            },
            {
                title: 'Дизайн общественных пространств',
                path: path.publicSpacesInterior,
            },
        ],
    },
    {
        title: 'Стоимость и этапы строительства',
        path: path.costAndStages,
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
]
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
        label: "Частная архитектура"
    },
    {
        link: path.publicArchitecture,
        label: "Общественная архитектура"
    },
    {
        link: path.blocksArchitecture,
        label: "Многоквартирные дома"
    },
    {
        link: path.interiorDesign,
        label: "Дизайн интерьера"
    },
    {
        link: path.housesInterior,
        label: "Дома"
    },
    {
        link: path.apartmentsInterior,
        label: "Квартиры"
    },
    {
        link: path.publicSpacesInterior,
        label: "Общественные пространства"
    },
    {
        link: path.costAndStages,
        label: "Стоимость и этапы"
    },
    {
        link: path.blog,
        label: "Блог"
    },
    {
        link: path.contacts,
        label: "Контакты"
    }
];