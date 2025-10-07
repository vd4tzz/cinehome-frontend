function randomTicketId() {
    return Math.random().toString(36).substring(2, 10).toUpperCase(); // Ví dụ: "4F7D9A1B"
}

export default function SeatMockData() {
    return [
        {
            rowName: "A",
            totalColumn: 10,
            rowSeats: [
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "A1", columnOrder: 1, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "A2", columnOrder: 2, occupied: false },
                { seatType: "", ticketId: randomTicketId(), isSeat: false, name: "", columnOrder: 3, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "A3", columnOrder: 4, occupied: true},
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "A4", columnOrder: 5, occupied: true},
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "A5", columnOrder: 6, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "A6", columnOrder: 7, occupied: false },
                { seatType: "", ticketId: randomTicketId(), isSeat: false, name: "", columnOrder: 8, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "A7", columnOrder: 9, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "A8", columnOrder: 10, occupied: false },
            ]
        },
        {
            rowName: "B",
            totalColumn: 10,
            rowSeats: [
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "B1", columnOrder: 1, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "B2", columnOrder: 2, occupied: false },
                { seatType: "", ticketId: randomTicketId(), isSeat: false, name: "", columnOrder: 3, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "B3", columnOrder: 4, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "B4", columnOrder: 5, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "B5", columnOrder: 6, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "B6", columnOrder: 7, occupied: false },
                { seatType: "", ticketId: randomTicketId(), isSeat: false, name: "", columnOrder: 8, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "B7", columnOrder: 9, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "B8", columnOrder: 10, occupied: false },
            ]
        },
        {
            rowName: "C",
            totalColumn: 10,
            rowSeats: [
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "C1", columnOrder: 1, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "C2", columnOrder: 2, occupied: false },
                { seatType: "", ticketId: randomTicketId(), isSeat: false, name: "", columnOrder: 3, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "C3", columnOrder: 4, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "C4", columnOrder: 5, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "C5", columnOrder: 6, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "C6", columnOrder: 7, occupied: false },
                { seatType: "", ticketId: randomTicketId(), isSeat: false, name: "", columnOrder: 8, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "C7", columnOrder: 9, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "C8", columnOrder: 10, occupied: false },
            ]
        },
        {
            rowName: "D",
            totalColumn: 10,
            rowSeats: [
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "D1", columnOrder: 1, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "D2", columnOrder: 2, occupied: false },
                { seatType: "", ticketId: randomTicketId(), isSeat: false, name: "", columnOrder: 3, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "D3", columnOrder: 4, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "D4", columnOrder: 5, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "D5", columnOrder: 6, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "D6", columnOrder: 7, occupied: false },
                { seatType: "", ticketId: randomTicketId(), isSeat: false, name: "", columnOrder: 8, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "D7", columnOrder: 9, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "D8", columnOrder: 10, occupied: false },
            ]
        },
        {
            rowName: "E",
            totalColumn: 10,
            rowSeats: [
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "E1", columnOrder: 1, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "E2", columnOrder: 2, occupied: false },
                { seatType: "", ticketId: randomTicketId(), isSeat: false, name: "", columnOrder: 3, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "E3", columnOrder: 4, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "E4", columnOrder: 5, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "E5", columnOrder: 6, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "E6", columnOrder: 7, occupied: false },
                { seatType: "", ticketId: randomTicketId(), isSeat: false, name: "", columnOrder: 8, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "E7", columnOrder: 9, occupied: false },
                { seatType: "Đơn", ticketId: randomTicketId(), isSeat: true, name: "E8", columnOrder: 10, occupied: false },
            ]
        },
        {
            rowName: "H",
            totalColumn: 10,
            rowSeats: [
                { seatType: "Đôi", isSeat: true, name: "H1", columnOrder: 1, occupied: false },
                { seatType: "", isSeat: false, name: "", columnOrder: 2, occupied: false },
                { seatType: "", isSeat: false, name: "", columnOrder: 4, occupied: false },
                { seatType: "Đôi", isSeat: true, name: "H2", columnOrder: 3, occupied: false },
                { seatType: "", isSeat: false, name: "", columnOrder: 5, occupied: false },
                { seatType: "", isSeat: false, name: "", columnOrder: 6, occupied: false },
                { seatType: "Đôi", isSeat: true, name: "H3", columnOrder: 7, occupied: false },
            ]
        }
    ];
}
