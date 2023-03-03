
<script>
    import Tabs from "./SimTabs.svelte";
    import Tab1 from "./tabs/AC-Analysis-Component.svelte";
    import Tab2 from "./tabs/Transient-Component.svelte";
    import Tab3 from "./tabs/DC-Sweep-Component.svelte";
    import Tab4 from "./tabs/DC-Transfer-Component.svelte";
    import Tab5 from "./tabs/DC-Operating-Point-Component.svelte";
    import Tab6 from "./tabs/PCB-Analysis-Component.svelte";
    import Tab7 from "./tabs/PCB-EMI-Analysis-Component.svelte";
let items = [
    {
        label: "AC Analysis",
        value: 1,
        component: Tab1,
        slabel: "ac",
        tooltip: "AC Analysis - Analyze the circuit with AC sources"
    }, 
    {
        label: "Transient Analysis",
        value: 2,
        component: Tab2,
        slabel: "Trans",
        tooltip: "Transient Analysis - Analyze the circuit's transient response. The reponse of the circuit to a step change in the input."
    },
    {
        label: "DC Sweep",
        value: 3,
        component: Tab3,
        slabel: "DC", 
        tooltip: "DC Sweep - Sweep the DC value of a source and plot the response"

    }, 
    {
        label: "DC Transfer",
        value: 4,
        component: Tab4, 
        slabel: "DC-Transfer",
        tooltip: "DC Transfer - Plot the transfer function of the circuit"
    }, 
    {
        label: "DC Operating Point",
        value: 5,
        component: Tab5, 
        slabel: "DC-OP", 
        tooltip: "DC Operating Point - Find the DC operating point of the circuit"
    }, 
    {
        label: "PCB Analysis",
        value: 6,
        component: Tab6, 
        slabel: "PCB", 
        tooltip: "PCB Analysis - Analyze the circuit with PCB layout"
    },
    {
        label: "PCB EMI Analysis",
        value: 7,
        component: Tab7,
        slabel: "PCB-EMI",
        tooltip: "PCB EMI Analysis - Analyze the circuit with PCB layout for crosstalk/EMI"
    }
]
</script>

<Tabs {items} />
