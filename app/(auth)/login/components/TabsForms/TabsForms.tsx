import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

export default function TabsForms() {
  return (
    <Tabs defaultValue="signin" className="md:w-[400px]">
        <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
            <Card>
                <CardContent className="space-y-2">
                    <LoginForm />
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="signup">
            <Card>
                <CardContent className="space-y-2">
                    <RegisterForm />
                </CardContent>
            </Card>
        </TabsContent>
    </Tabs>
    
  )
}
