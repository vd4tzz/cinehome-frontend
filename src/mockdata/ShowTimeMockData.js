import CinemaMockData from "../mockdata/CinemaMockData.js";

function now() {
    return new Date();
}

function next(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return date;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomTimeSlots() {
    const slots = [];
    const count = randomInt(2, 5); // mỗi rạp có 2-5 suất chiếu
    for (let i = 0; i < count; i++) {
        const hour = randomInt(9, 22); // từ 9h sáng đến 22h
        const minute = randomInt(0, 1) ? "00" : "30";
        slots.push(`${hour}:${minute}`);
    }
    return slots.sort(); // sắp xếp thời gian
}

export default function showTimeMockData(movieId) {
    const cinemasData = CinemaMockData();
    const days = 5;
    const schedule = [];

    for (let d = 0; d < days; d++) {
        const date = next(d);
        const dateStr = date.toISOString().split("T")[0];

        const theatersCount = randomInt(1, 4); // mỗi ngày có 1-4 rạp
        const selectedCinemas = [];

        while (selectedCinemas.length < theatersCount) {
            const randCinema = cinemasData[randomInt(0, cinemasData.length - 1)];
            if (!selectedCinemas.includes(randCinema)) {
                selectedCinemas.push(randCinema);
            }
        }

        const cinemas = selectedCinemas.map(cinema => ({
            cinemaName: cinema.cinemaName,
            times: randomTimeSlots()
        }));

        schedule.push({ date: dateStr, cinemas: cinemas });
    }


    /*
    Ví dụ giá trị trả về:
    {
      movieId: "movie123",
      startDate: "2025-10-04",
      endDate: "2025-10-08",
      schedule: [
        {
          date: "2025-10-04",
          cinemas: [
            { cinemaName: "CineHome Vincom Đồng Khởi", times: ["10:00", "13:00", "16:00"] },
            { cinemaName: "CineHome Aeon Tân Phú", times: ["11:00", "14:00"] }
          ]
        },
        {
          date: "2025-10-05",
          cinemas: [
            { cinemaName: "CineHome Gò Vấp", times: ["09:30", "12:00", "18:00"] }
          ]
        }
      ]
    }
    */
    return {
        movieId: movieId,
        startDate: now().toISOString().split("T")[0],
        endDate: next(days - 1).toISOString().split("T")[0],
        schedule: schedule
    };
}
