export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                },
                    {
                        id: 'chart-maps',
                        title: 'Chart',
                        type: 'group',
                        icon: 'icon-charts',
                        children: [
                            {
                                id: 'charts',
                                title: 'Charts',
                                type: 'item',
                                icon: 'feather icon-pie-chart',
                                url: '/charts/nvd3'
                            }
                        ]
                    }
            ]
        },
       
    ]
}