import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "./components/ui/badge"

export function App() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-[600px] h-[450px]">
                <p className="text-xl font-semibold text-center">ENGINEERING - DRAWING SET</p>
                <CardContent>
                    <Button>VIEW DRAWING SET ON BIM360</Button>
                    <Badge variant="default" className="m-2">V7</Badge>
                    <div className="flex my-2">
                        <p className="pr-4">File Name</p>
                        <p>EngSet_V1_02-34-38_3-8-25.pdf</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

