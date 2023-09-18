import api from "@/services/api/api_github";
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";

const UserContext = createContext<{
  user: { name: string; avatar_url: string };
}>({ user: { name: "", avatar_url: "" } });

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string; avatar_url: string }>({
    name: "",
    avatar_url: "",
  });

  useEffect(() => {
    async function loadProfile() {
      try {
        const profileData = await api.get(`/users/matthns`);
        setUser(profileData.data);
      } catch (err) {
        console.error("Oops, have error on API GET", err);
      }
    }

    loadProfile();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
