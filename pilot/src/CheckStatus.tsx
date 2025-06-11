import { useEffect, useState } from "react"

export function CheckStatus() {
    type TFolderConnectionStatus = {
        folderA: boolean;
        folderB: boolean;
        folderC: boolean;
    }

    const [folderConnectionStatus, setFolderConnectionStatus] = useState<TFolderConnectionStatus | null>(null);

    // Make a server request to check the status of the locations
    useEffect(() => {
        fetch('http://localhost:8080/flags')
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json();
            })
            .then((data: TFolderConnectionStatus) => setFolderConnectionStatus(data))
            .catch((error) => console.error('Fetch error', error));
    }, [])

    console.log("folderConnectionStatus", folderConnectionStatus);

    return (
        <>
            <p>CHECKING STATUS</p>
            {folderConnectionStatus ? (
                <div>
                    <h3>Folder Connection Status:</h3>
                    {Object.entries(folderConnectionStatus).map(([folderName, isConnected]) => (
                        <div key={folderName}>
                            <strong>{folderName}</strong>: {isConnected ? '✅ Connected' : '❌ Disconnected'}
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}
