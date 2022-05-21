export const dataColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'username',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.image} alt="avatar" className="cellImg" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    &#x2022; {params.row.status}
                </div>
            )
        }
    },
    {
        field: 'transactions',
        headerName: 'Transactions',
        width: 160,
    },
    // {
    //     field: 'Actions',
    //     headerName: 'Actions',
    //     width: 160,
    // },
];

export const dataRows = [
    {
        "id": 1,
        "username": "Udell de Clerc",
        "email": "ude0@yellowpages.com",
        "image": "https://i.pravatar.cc/50",
        "status": "active",
        "transactions": "$710.59"
    },
    {
        "id": 2,
        "username": "Yehudit Lightwing",
        "email": "ylightwing1@buzzfeed.com",
        "image": "https://i.pravatar.cc/50",
        "status": "active",
        "transactions": "$785.33"
    },
    {
        "id": 3,
        "username": "Tessi Stolze",
        "email": "tstolze2@state.gov",
        "image": "https://i.pravatar.cc/50",
        "status": "inactive",
        "transactions": "$768.03"
    },
    {
        "id": 4,
        "username": "Celene Pelosi",
        "email": "cpelosi3@wunderground.com",
        "image":"https://i.pravatar.cc/50",
        "status": "inactive",
        "transactions": "$57.30"
    },
    {
        "id": 5,
        "username": "Dannie Pawlata",
        "email": "dpawlata4@godaddy.com",
        "image": "https://i.pravatar.cc/50",
        "status": "active",
        "transactions": "$635.27"
    },
    {
        "id": 6,
        "username": "Corrie Hardie",
        "email": "chardie5@earthlink.net",
        "image": "https://i.pravatar.cc/50",
        "status": "active",
        "transactions": "$124.13"
    },
    {
        "id": 7,
        "username": "Hyatt Sterzaker",
        "email": "hsterzaker6@ebay.com",
        "image": "https://i.pravatar.cc/50",
        "status": "active",
        "transactions": "$170.93"
    },
    {
        "id": 8,
        "username": "Colleen Smithen",
        "email": "csmithen7@hubpages.com",
        "image":"https://i.pravatar.cc/50",
        "status": "inactive",
        "transactions": "$43.63"
    },
    {
        "id": 9,
        "username": "Dave Jahncke",
        "email": "djahncke8@hostgator.com",
        "image": "https://i.pravatar.cc/50",
        "status": "active",
        "transactions": "$71.21"
    },
    {
        "id": 10,
        "username": "David Tudge",
        "email": "dtudge9@house.gov",
        "image": "https://i.pravatar.cc/50",
        "status": "active",
        "transactions": "$750.60"
    },
    {
        "id": 11,
        "username": "Godard Canet",
        "email": "gcaneta@dot.gov",
        "image": "https://i.pravatar.cc/50",
        "status": "active",
        "transactions": "$540.10"
    },
    {
        "id": 12,
        "username": "Alysia Tobias",
        "email": "atobiasb@opera.com",
        "image": "https://i.pravatar.cc/50",
        "status": "inactive",
        "transactions": "$990.78"
    }
]