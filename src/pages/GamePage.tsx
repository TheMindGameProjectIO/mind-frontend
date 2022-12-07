import { useParams } from "react-router-dom";
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import Board from '../components/Board';
import GameProvider from '../contexts/GameProvider';
import ClientsCard from '../components/ClientCards';

type TGamePageParams = {
    gameId: string;
}

const GamePage = () => {
    const { gameId } = useParams<TGamePageParams>();

    return (
        <Layout header={true}>
            <div className="bg-white full-screen center-content flex-col">
                <GameProvider>
                    <Board />
                    <ClientsCard className="mt-3" />
                </GameProvider>
            </div>
        </Layout>
    );
}

export default GamePage;