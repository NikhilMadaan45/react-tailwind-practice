import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData();

    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github: {data.login}
            <img src={data.avatar_url} alt="" width={200} />
        </div>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/NikhilMadaan45');
    const data = await response.json();
    return data;
}