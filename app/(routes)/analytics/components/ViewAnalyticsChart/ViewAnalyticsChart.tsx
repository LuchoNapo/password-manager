"use client"
import { ViewAnalyticsChartProps } from "./ViewAnalyticsChart.types";

import * as React from "react"
import { User } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"



export default function ViewAnalyticsChart(props: ViewAnalyticsChartProps) {
    const { wordpress, google, email } = props

    const chartData = [
        { browser: "wordpress", elements: wordpress, fill: "var(--color-wordpress)" },
        { browser: "google", elements: google, fill: "var(--color-google)" },
        { browser: "email", elements: email, fill: "var(--color-email)" },
    ];

    const chartConfig = {
        elements: {
            label: "Elementos",
        },
        wordpress: {
            label: "Wordpress",
            color: "#02719C",
        },
        google: {
            label: "Google Drive",
            color: "#E34133",
        },
        email: {
            label: "Email",
            color: "hsl(var(--chart-3))",
        },
    } satisfies ChartConfig

    const totalElements = wordpress + google + email


    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Elementos totales</CardTitle>
                <CardDescription>Contador de elementos creados</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="elements"
                            nameKey="browser"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalElements.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Elements
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Cuentas de Wordpress, Google Drive y Email <User className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total elements created
                </div>
            </CardFooter>
        </Card>
    )
}

