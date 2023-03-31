import Image from "next/image";

const loading = () => {
    return (
        <div className="flex justify-center">
            <img
                className="h-96"
                src="loading.svg"
                alt="loading"
            />
        </div>
    );
};

export default loading;
