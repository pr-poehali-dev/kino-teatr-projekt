import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

  const movies = [
    {
      id: "1",
      title: "Космическая одиссея",
      genre: "Sci-Fi",
      duration: "148 мин",
      rating: "16+",
      times: ["12:00", "15:30", "18:45", "21:30"],
      price: 450,
      poster: "/img/10e4f0d7-dd55-40ba-9198-41f7b6b231f1.jpg",
    },
    {
      id: "2",
      title: "Романтика в Париже",
      genre: "Романтика",
      duration: "112 мин",
      rating: "12+",
      times: ["13:15", "16:00", "19:30", "22:00"],
      price: 400,
      poster: "/img/10e4f0d7-dd55-40ba-9198-41f7b6b231f1.jpg",
    },
    {
      id: "3",
      title: "Приключения героев",
      genre: "Боевик",
      duration: "135 мин",
      rating: "18+",
      times: ["14:30", "17:45", "20:15", "23:00"],
      price: 500,
      poster: "/img/10e4f0d7-dd55-40ba-9198-41f7b6b231f1.jpg",
    },
  ];

  const foodItems = [
    { name: "Попкорн средний", price: 250, category: "Закуски" },
    { name: "Попкорн большой", price: 350, category: "Закуски" },
    { name: "Кола 0.5л", price: 150, category: "Напитки" },
    { name: "Начос с сыром", price: 300, category: "Закуски" },
    { name: "Хот-дог", price: 200, category: "Горячее" },
    { name: "Кофе американо", price: 180, category: "Напитки" },
  ];

  const generateSeatMap = () => {
    const seats = [];
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];

    for (let row of rows) {
      for (let i = 1; i <= 12; i++) {
        const seatId = `${row}${i}`;
        const isOccupied = Math.random() < 0.2; // 20% занятых мест
        seats.push({
          id: seatId,
          row,
          number: i,
          isOccupied,
          isSelected: selectedSeats.includes(seatId),
        });
      }
    }
    return seats;
  };

  const handleSeatClick = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Film" size={32} className="text-red-500" />
              <h1 className="text-2xl font-bold text-white">CINEMA</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#afisha"
                className="text-white hover:text-red-400 transition-colors"
              >
                Афиша
              </a>
              <a
                href="#bilety"
                className="text-white hover:text-red-400 transition-colors"
              >
                Билеты
              </a>
              <a
                href="#eda"
                className="text-white hover:text-red-400 transition-colors"
              >
                Еда и напитки
              </a>
              <a
                href="#zaly"
                className="text-white hover:text-red-400 transition-colors"
              >
                Залы
              </a>
              <a
                href="#akcii"
                className="text-white hover:text-red-400 transition-colors"
              >
                Акции
              </a>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-6">
            Лучший кинотеатр <span className="text-red-500">в городе</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Современные технологии, комфортные кресла и незабываемые впечатления
            от просмотра
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8"
            >
              <Icon name="Ticket" size={20} className="mr-2" />
              Купить билеты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Расписание
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="afisha" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-white/10 backdrop-blur-sm">
            <TabsTrigger
              value="afisha"
              className="text-white data-[state=active]:bg-red-600"
            >
              <Icon name="Film" size={18} className="mr-2" />
              Афиша
            </TabsTrigger>
            <TabsTrigger
              value="bilety"
              className="text-white data-[state=active]:bg-red-600"
            >
              <Icon name="Ticket" size={18} className="mr-2" />
              Билеты
            </TabsTrigger>
            <TabsTrigger
              value="eda"
              className="text-white data-[state=active]:bg-red-600"
            >
              <Icon name="Coffee" size={18} className="mr-2" />
              Еда и напитки
            </TabsTrigger>
            <TabsTrigger
              value="zaly"
              className="text-white data-[state=active]:bg-red-600"
            >
              <Icon name="Monitor" size={18} className="mr-2" />
              Залы
            </TabsTrigger>
            <TabsTrigger
              value="akcii"
              className="text-white data-[state=active]:bg-red-600"
            >
              <Icon name="Percent" size={18} className="mr-2" />
              Акции
            </TabsTrigger>
          </TabsList>

          {/* Афиша */}
          <TabsContent value="afisha">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {movies.map((movie) => (
                <Card
                  key={movie.id}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white">
                        {movie.rating}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{movie.title}</CardTitle>
                    <CardDescription className="text-white/70">
                      {movie.genre} • {movie.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {movie.times.map((time) => (
                        <Badge
                          key={time}
                          variant="outline"
                          className="text-white border-white/30"
                        >
                          {time}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">
                        {movie.price} ₽
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="bg-red-600 hover:bg-red-700 text-white"
                            onClick={() => setSelectedMovie(movie.id)}
                          >
                            Купить билет
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl bg-slate-800 border-slate-700">
                          <DialogHeader>
                            <DialogTitle className="text-white">
                              Выберите места - {movie.title}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            {/* Экран */}
                            <div className="text-center">
                              <div className="bg-white/20 rounded-lg p-4 inline-block">
                                <span className="text-white font-semibold">
                                  ЭКРАН
                                </span>
                              </div>
                            </div>

                            {/* Карта мест */}
                            <div className="grid grid-cols-12 gap-2 max-w-2xl mx-auto">
                              {generateSeatMap().map((seat) => (
                                <button
                                  key={seat.id}
                                  className={`w-8 h-8 rounded-md text-xs font-semibold transition-all ${
                                    seat.isOccupied
                                      ? "bg-gray-600 cursor-not-allowed text-gray-400"
                                      : seat.isSelected
                                        ? "bg-red-600 text-white scale-110"
                                        : "bg-white/20 text-white hover:bg-white/30"
                                  }`}
                                  onClick={() =>
                                    !seat.isOccupied && handleSeatClick(seat.id)
                                  }
                                  disabled={seat.isOccupied}
                                >
                                  {seat.id}
                                </button>
                              ))}
                            </div>

                            {/* Легенда */}
                            <div className="flex justify-center space-x-6 text-sm">
                              <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-white/20 rounded"></div>
                                <span className="text-white/70">Свободно</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-red-600 rounded"></div>
                                <span className="text-white/70">Выбрано</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-gray-600 rounded"></div>
                                <span className="text-white/70">Занято</span>
                              </div>
                            </div>

                            {selectedSeats.length > 0 && (
                              <div className="bg-white/10 rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="text-white font-semibold">
                                      Выбранные места:{" "}
                                      {selectedSeats.join(", ")}
                                    </p>
                                    <p className="text-white/70">
                                      Количество: {selectedSeats.length}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-2xl font-bold text-white">
                                      {movie.price * selectedSeats.length} ₽
                                    </p>
                                    <Button className="bg-red-600 hover:bg-red-700 text-white mt-2">
                                      Перейти к оплате
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Билеты */}
          <TabsContent value="bilety">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-6">Онлайн бронирование</h3>
              <p className="text-xl mb-8">
                Выберите фильм из афиши для покупки билетов
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                  <Icon
                    name="Smartphone"
                    size={48}
                    className="text-red-500 mx-auto mb-4"
                  />
                  <h4 className="text-white font-semibold mb-2">
                    QR-код билеты
                  </h4>
                  <p className="text-white/70 text-sm">
                    Покажите QR-код на входе
                  </p>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                  <Icon
                    name="CreditCard"
                    size={48}
                    className="text-red-500 mx-auto mb-4"
                  />
                  <h4 className="text-white font-semibold mb-2">
                    Онлайн оплата
                  </h4>
                  <p className="text-white/70 text-sm">
                    Безопасная оплата картой
                  </p>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
                  <Icon
                    name="Clock"
                    size={48}
                    className="text-red-500 mx-auto mb-4"
                  />
                  <h4 className="text-white font-semibold mb-2">
                    Бронь 30 мин
                  </h4>
                  <p className="text-white/70 text-sm">
                    Время на оплату билетов
                  </p>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Еда и напитки */}
          <TabsContent value="eda">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Кафе-бар</h3>
                <p className="text-xl text-white/80">
                  Вкусные угощения к фильму
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodItems.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-white font-semibold">
                            {item.name}
                          </h4>
                          <Badge
                            variant="outline"
                            className="text-white/70 border-white/30 mt-1"
                          >
                            {item.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-white">
                            {item.price} ₽
                          </p>
                        </div>
                      </div>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        <Icon name="Plus" size={16} className="mr-2" />
                        Добавить
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Залы */}
          <TabsContent value="zaly">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Наши залы
                </h3>
                <p className="text-xl text-white/80">
                  Современное оборудование для лучших впечатлений
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon
                        name="Monitor"
                        size={24}
                        className="mr-2 text-red-500"
                      />
                      Зал №1 - IMAX
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Большой экран с технологией IMAX
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-white/80">
                      <span>Количество мест:</span>
                      <span>120</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Звуковая система:</span>
                      <span>Dolby Atmos</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Экран:</span>
                      <span>IMAX 4K</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Icon
                        name="Crown"
                        size={24}
                        className="mr-2 text-red-500"
                      />
                      Зал №2 - VIP
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Премиум зал с кожаными креслами
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between text-white/80">
                      <span>Количество мест:</span>
                      <span>48</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Кресла:</span>
                      <span>Кожаные реклайнеры</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Сервис:</span>
                      <span>Подача еды в зал</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Акции */}
          <TabsContent value="akcii">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Акции и скидки
                </h3>
                <p className="text-xl text-white/80">
                  Выгодные предложения для наших гостей
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-r from-red-600 to-red-700 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Icon name="Percent" size={32} className="text-white" />
                      <Badge className="bg-white text-red-600 font-bold">
                        -20%
                      </Badge>
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">
                      Студенческая скидка
                    </h4>
                    <p className="text-white/90">
                      Скидка 20% для студентов при предъявлении студенческого
                      билета
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Icon name="Users" size={32} className="text-white" />
                      <Badge className="bg-white text-blue-600 font-bold">
                        2+1
                      </Badge>
                    </div>
                    <h4 className="text-white font-bold text-xl mb-2">
                      Семейная акция
                    </h4>
                    <p className="text-white/90">
                      Третий билет бесплатно при покупке двух взрослых билетов
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
