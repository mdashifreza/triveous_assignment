import { useState, useEffect } from "react";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    onSnapshot,
} from "firebase/firestore";

const useFavorites = (user, item) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user) {
            setIsFavorite(false);
            setLoading(false);
            return;
        }

        const db = getFirestore();
        const userDocRef = doc(db, "favorites", user.uid);

        const checkFavoriteStatus = async () => {
            try {
                const docSnapshot = await getDoc(userDocRef);

                if (docSnapshot.exists()) {
                    const userFavorites = docSnapshot.data().favorites || [];
                    setIsFavorite(userFavorites.includes(item.id));
                }

                setLoading(false);

                // Listen for real-time updates using onSnapshot
                const unsubscribe = onSnapshot(userDocRef, (snapshot) => {
                    const userFavorites = snapshot.data()?.favorites || [];
                    setIsFavorite(userFavorites.includes(item.id));
                });

                return () => {
                    // Cleanup the listener when the component unmounts
                    unsubscribe();
                };
            } catch (error) {
                console.error("Error checking favorite status:", error);

                // Set an error state or handle accordingly
                setError("Failed to get document. Please try again later.");
                setLoading(false);
            }
        };

        checkFavoriteStatus();
    }, [user, item.id]);

    const toggleFavorite = async () => {
        if (!user) {
            // Handle the case where the user is not logged in
            return;
        }

        try {
            const db = getFirestore();
            const userDocRef = doc(db, "favorites", user.uid);

            const docSnapshot = await getDoc(userDocRef);
            let userFavorites = docSnapshot.exists() ? docSnapshot.data().favorites || [] : [];

            if (isFavorite) {
                userFavorites = userFavorites.filter((fav) => fav !== item.id);
            } else {
                userFavorites.push(item.id);
            }

            await setDoc(userDocRef, { favorites: userFavorites });

            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error("Error toggling favorite status:", error);
            setError(error.message);
        }
    };

    return { isFavorite, toggleFavorite, loading, error };
};

export default useFavorites;
