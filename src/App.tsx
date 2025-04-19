import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ComicsPage from "./pages/Comics/ComicsPage";
import ComicDetailPage from "./pages/Comics/ComicDetailPage";
import AnimePage from "./pages/Anime/AnimePage";
import AnimeDetailPage from "./pages/Anime/AnimeDetailPage";
import NovelsPage from "./pages/Novels/NovelsPage";
import NovelDetailPage from "./pages/Novels/NovelDetailPage";
import KDramasPage from "./pages/KDramas/KDramasPage";
import KDramaDetailPage from "./pages/KDramas/KDramaDetailPage";
import MagazinesPage from "./pages/Magazines/MagazinesPage";
import MagazineDetailPage from "./pages/Magazines/MagazineDetailPage";
import CartoonsPage from "./pages/Cartoons/CartoonsPage";
import CartoonDetailPage from "./pages/Cartoons/CartoonDetailPage";
import MoviesPage from "./pages/Movies/MoviesPage";
import MovieDetailPage from "./pages/Movies/MovieDetailPage";
import Auth from "./pages/Auth";
import UserProfile from "./components/UserProfile";
import UserProfilePage from "./pages/Profile/UserProfilePage";
import GamesPage from "./pages/Games/GamesPage";
import GameDetailPage from "./pages/Games/GameDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<UserProfilePage />} />
          
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/comics/:id" element={<ComicDetailPage />} />
          
          <Route path="/anime" element={<AnimePage />} />
          <Route path="/anime/:id" element={<AnimeDetailPage />} />
          
          <Route path="/novels" element={<NovelsPage />} />
          <Route path="/novels/:id" element={<NovelDetailPage />} />
          
          <Route path="/kdramas" element={<KDramasPage />} />
          <Route path="/kdramas/:id" element={<KDramaDetailPage />} />
          
          <Route path="/magazines" element={<MagazinesPage />} />
          <Route path="/magazines/:id" element={<MagazineDetailPage />} />
          
          <Route path="/cartoons" element={<CartoonsPage />} />
          <Route path="/cartoons/:id" element={<CartoonDetailPage />} />
          
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
          
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/:id" element={<GameDetailPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
