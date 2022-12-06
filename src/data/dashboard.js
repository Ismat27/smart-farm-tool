const cropsData = [
    {
        label: "Potatoes",
        value: 54
    },
    {
        label: "Tomatoes",
        value: 30
    },
    {
        label: "Maize",
        value: 26
    },
]

const addToDate = (days) => {
    const factor = 24 * 60 * 60 * 1000
    const today = new Date()
    let newDate = today.setDate(today.getDate() + days)
    const interval = new Date(newDate) - new Date()
    console.log(interval/factor);
    return new Date(newDate)
}

const dueTasks = [
    {
        id: 1,
        task: 'Scheduled spraying was not performed. You have 2 days delay.',
        plants: 'Potatoes',
        due: addToDate(-2)
    },
    {
        id: 2,
        task: 'Plant grafting scheduled with Dr Chisom. Happens in 5 days.',
        plants: 'Tomatoes',
        due: addToDate(5)
    },
    {
        id: 3,
        task: 'Tomatoes disease control seminar with Dr Chisom. Happens in 6 days.',
        plants: 'Tomatoes',
        due: addToDate(6)
    },
]

const upcomingData = [ 'spraying', 'fertilization', 'delivery']

export {cropsData, upcomingData, dueTasks}