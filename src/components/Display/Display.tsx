import MainSegment from "./MainSegment/MainSegment"
import SecondarySegment from "./SecondarySegment/SecondarySegment";

interface LCDDisplayProps {
    data?: (string[] | string)[];
    secondaryData?: (string[] | string)[];
}

export default function Display({ data, }: LCDDisplayProps) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,1765.62825,461.35158" style={{ backgroundColor: "#000" }}>
            <g transform="translate(-67.07223,-165.2865)">
                <g strokeMiterlimit="10">

                    <path d="M1170.16803,464.0499l-2.11956,17.14077l-12.15137,-0.05435v-17.08642z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1170.16803,569.48462l-2.11956,17.14077l-12.15137,-0.05435v-17.08642z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1169.2985,600.35422l-2.11956,17.14077l-12.15137,-0.05435v-17.08642z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1463.51275,413.08552v-31.31579h15.6579l-4.73684,31.31579z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1776.64624,549.13808v-21.57894h13.29268v21.57894z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1776.64624,626.63808v-21.57895h13.29268v21.57895z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1797.73605,549.13808v-21.57894h14.27094v21.57894z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1797.73605,626.63808v-21.57895h14.27094v21.57895z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1819.67416,549.13808v-21.57894h13.02632v21.57894z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1819.67416,626.63808v-21.57895h13.02632v21.57895z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1781.911,596.24336l11.8421,-17.63158h17.36843l-12.76316,17.63158z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1806.77942,574.92756l8.87624,-17.63158h17.04481l-8.11048,17.63158z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1786.54389,409.6547v-28.47458h11.77966v14.40678l-1.94915,14.06779z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1806.88287,409.6547v-28.47458h13.13559l-1.8644,19.91526l-2.88136,8.55932z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />

                    <defs>
                        <linearGradient
                            id="displayGradient"
                            x1="0"
                            y1="0"
                            x2="1765.62825"
                            y2="461.35158"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0%" stopColor="#3e4057" />
                            <stop offset="100%" stopColor="#14312c" />
                        </linearGradient>
                    </defs>

                    <MainSegment color="url(#displayGradient)" data={data?.[0]} />
                    <MainSegment offset={(154 * 1)} color="url(#displayGradient)" data={data?.[1]} />
                    <MainSegment offset={(154 * 2)} color="url(#displayGradient)" data={data?.[2]} />
                    <MainSegment offset={(154 * 3)} color="url(#displayGradient)" data={data?.[3]} />
                    <MainSegment offset={(154 * 4)} color="url(#displayGradient)" data={data?.[4]} />
                    <MainSegment offset={(154 * 5)} color="url(#displayGradient)" data={data?.[5]} />
                    <MainSegment offset={(154 * 6)} color="url(#displayGradient)" data={data?.[6]} />
                    <MainSegment offset={(156 * 7)} color="url(#displayGradient)" data={data?.[7]} />
                    <MainSegment offset={(155 * 8)} color="url(#displayGradient)" data={data?.[8]} />
                    <MainSegment offset={(154 * 9)} color="url(#displayGradient)" data={data?.[9]} />
                    <MainSegment offset={(154 * 10)} color="url(#displayGradient)" data={data?.[10]} />

                    <SecondarySegment color="url(#displayGradient)" data="line_bottom_right" />
                    <SecondarySegment color="url(#displayGradient)" offset={(103 * 1)} isCenterPosition data="" />
                    <SecondarySegment color="url(#displayGradient)" offset={(103 * 2)} data="" />
                    {/* <g fill="url(#displayGradient)" stroke="none" strokeWidth="0">
                        <path d="M143.05225,183.22586v-8.47458h11.18644v13.05085h-7.11864z" />
                        <path d="M202.9675,187.80214h-7.11864v-13.05085h11.18644v8.47458z" />
                        <path d="M160.76411,187.97163v-13.05084h12.20339v13.05084z" />
                        <path d="M177.88276,187.97163v-13.05084h12.20339v13.05084z" />
                        <path d="M147.12005,282.71736h7.11864v13.05085h-11.18644v-8.47458z" />
                        <path d="M207.03531,287.29362v8.47458h-11.18644v-13.05085h7.11864z" />
                        <path d="M172.9675,282.54787v13.05085h-12.20339v-13.05085z" />
                        <path d="M190.08615,282.54787v13.05085h-12.20339v-13.05085z" />
                        <path d="M147.34973,240.03939l-4.94186,-4.4186l4.94186,-5h6.97674v9.41861z" />
                        <path d="M195.60555,240.03939v-9.41861h6.97674l4.94186,5l-4.94186,4.4186z" />
                        <path d="M160.54742,239.98125v-9.36047h13.60465v9.36047z" />
                        <path d="M177.71428,239.98125v-9.36047h14.27093v9.36047z" />
                        <path d="M134.55904,205.15567v-17.14077h8.72093l4.7093,4.69891v12.44186z" />
                        <path d="M134.67531,231.02777v-12.26744h13.43023v7.09302l-5.05814,5.17442z" />
                        <path d="M134.67531,217.01614v-10.40698h13.43023v10.40698z" />
                        <path d="M134.55904,256.78355v-17.14077h8.72093l4.7093,4.69891v12.44186z" />
                        <path d="M134.67531,282.65565v-12.26744h13.43023v7.09302l-5.05814,5.17442z" />
                        <path d="M134.67531,268.64396v-10.40698h13.43023v10.40698z" />
                        <path d="M202.93114,205.15567v-12.44186l4.7093,-4.69891h8.72093v17.14077z" />
                        <path d="M207.87299,231.02777l-5.05814,-5.17442v-7.09302h13.43023v12.26744z" />
                        <path d="M202.81485,217.01614v-10.40698h13.43023v10.40698z" />
                        <path d="M202.93114,256.78355v-12.44186l4.7093,-4.69891h8.72093v17.14077z" />
                        <path d="M207.87299,282.65565l-5.05814,-5.17442v-7.09302h13.43023v12.26744z" />
                        <path d="M202.81485,268.64396v-10.40698h13.43023v10.40698z" />
                    </g> */}
                    {/* <g fill="url(#displayGradient)" stroke="none" strokeWidth="0">
                        <path d="M243.82149,183.22586v-8.47458h11.18644v13.05085h-7.11864z" />
                        <path d="M303.73672,187.80214h-7.11864v-13.05085h11.18644v8.47458z" />
                        <path d="M261.53335,187.97163v-13.05084h12.20339v13.05084z" />
                        <path d="M278.652,187.97163v-13.05084h12.20339v13.05084z" />
                        <path d="M247.88928,282.71736h7.11864v13.05085h-11.18644v-8.47458z" />
                        <path d="M307.80454,287.29362v8.47458h-11.18644v-13.05085h7.11864z" />
                        <path d="M273.73672,282.54787v13.05085h-12.20339v-13.05085z" />
                        <path d="M290.85537,282.54787v13.05085h-12.20339v-13.05085z" />
                        <path d="M248.11896,240.03939l-4.94186,-4.4186l4.94186,-5h6.97674v9.41861z" />
                        <path d="M296.37478,240.03939v-9.41861h6.97674l4.94186,5l-4.94186,4.4186z" />
                        <path d="M261.31665,239.98125v-9.36047h13.60465v9.36047z" />
                        <path d="M278.4835,239.98125v-9.36047h14.27093v9.36047z" />
                        <path d="M235.32827,205.15567v-17.14077h8.72093l4.7093,4.69891v12.44186z" />
                        <path d="M235.44454,231.02777v-12.26744h13.43023v7.09302l-5.05814,5.17442z" />
                        <path d="M235.44454,217.01614v-10.40698h13.43023v10.40698z" />
                        <path d="M235.32827,256.78355v-17.14077h8.72093l4.7093,4.69891v12.44186z" />
                        <path d="M235.44454,282.65565v-12.26744h13.43023v7.09302l-5.05814,5.17442z" />
                        <path d="M235.44454,268.64396v-10.40698h13.43023v10.40698z" />
                        <path d="M303.70036,205.15567v-12.44186l4.7093,-4.69891h8.72093v17.14077z" />
                        <path d="M308.64223,231.02777l-5.05814,-5.17442v-7.09302h13.43023v12.26744z" />
                        <path d="M303.58408,217.01614v-10.40698h13.43023v10.40698z" />
                        <path d="M303.70036,256.78355v-12.44186l4.7093,-4.69891h8.72093v17.14077z" />
                        <path d="M308.64223,282.65565l-5.05814,-5.17442v-7.09302h13.43023v12.26744z" />
                        <path d="M303.58408,268.64396v-10.40698h13.43023v10.40698z" />
                    </g>
                    <g fill="url(#displayGradient)" stroke="none" strokeWidth="0">
                        <path d="M346.3215,183.22586v-8.47458h11.18644v13.05085h-7.11864z" />
                        <path d="M406.23675,187.80214h-7.11864v-13.05085h11.18644v8.47458z" />
                        <path d="M364.03336,187.97163v-13.05084h12.20339v13.05084z" />
                        <path d="M381.15201,187.97163v-13.05084h12.20339v13.05084z" />
                        <path d="M350.3893,282.71736h7.11864v13.05085h-11.18644v-8.47458z" />
                        <path d="M410.30454,287.29362v8.47458h-11.18644v-13.05085h7.11864z" />
                        <path d="M376.23675,282.54787v13.05085h-12.20339v-13.05085z" />
                        <path d="M393.3554,282.54787v13.05085h-12.20339v-13.05085z" />
                        <path d="M350.61898,240.03939l-4.94186,-4.4186l4.94186,-5h6.97674v9.41861z" />
                        <path d="M398.8748,240.03939v-9.41861h6.97674l4.94186,5l-4.94186,4.4186z" />
                        <path d="M363.81666,239.98125v-9.36047h13.60465v9.36047z" />
                        <path d="M380.98352,239.98125v-9.36047h14.27093v9.36047z" />
                        <path d="M337.82827,205.15567v-17.14077h8.72093l4.7093,4.69891v12.44186z" />
                        <path d="M337.94456,231.02777v-12.26744h13.43023v7.09302l-5.05814,5.17442z" />
                        <path d="M337.94456,217.01614v-10.40698h13.43023v10.40698z" />
                        <path d="M337.82827,256.78355v-17.14077h8.72093l4.7093,4.69891v12.44186z" />
                        <path d="M337.94456,282.65565v-12.26744h13.43023v7.09302l-5.05814,5.17442z" />
                        <path d="M337.94456,268.64396v-10.40698h13.43023v10.40698z" />
                        <path d="M406.20038,205.15567v-12.44186l4.7093,-4.69891h8.72093v17.14077z" />
                        <path d="M411.14224,231.02777l-5.05814,-5.17442v-7.09302h13.43023v12.26744z" />
                        <path d="M406.0841,217.01614v-10.40698h13.43023v10.40698z" />
                        <path d="M406.20038,256.78355v-12.44186l4.7093,-4.69891h8.72093v17.14077z" />
                        <path d="M411.14224,282.65565l-5.05814,-5.17442v-7.09302h13.43023v12.26744z" />
                        <path d="M406.0841,268.64396v-10.40698h13.43023v10.40698z" />
                    </g> */}

                    {/* <path d="M251.69174,203.83043v-11.4h10.2v11.4z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M292.19174,203.83043v-11.4h10.2v11.4z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M255.39174,215.63043v-10.5h11.5v10.5z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M287.19174,215.63043v-10.5h11.5v10.5z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M261.49172,227.73043v-10.2h12.4v10.2z" fill="url(#displayGradient)" stroke="#000000" strokeWidth="0" />
                    <path d="M280.39174,227.73043v-10.2h12.4v10.2z" fill="url(#displayGradient)" stroke="#000000" strokeWidth="0" /> */}
                    <path d="M484.13085,202.60062l44.20451,0.01524c0,0 5.54077,8.36338 13.1989,13.2274c5.83947,3.7089 16.09661,5.00736 16.09661,5.00736h996.99999v16.5h-998.32142c0,0 -14.79365,0.00813 -42.42703,-12.45028c-19.55122,-8.8146 -29.75157,-22.29972 -29.75157,-22.29972z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1587.74084,225.02066c0,0 30.23507,-1.78118 42.99807,-6.05215c11.44265,-3.82913 30.05232,-18.39321 30.05232,-18.39321c0,0 10.36056,-9.21449 14.23269,-13.97025c7.82481,-9.61047 12.06475,-18.32352 12.06475,-18.32352h105.35719c0,0 12.29361,2.08115 22.04992,10.16277c5.05737,4.18926 10.79238,12.58804 11.68394,20.25726c0.7411,6.37495 -2.70725,12.21067 -4.92874,15.02823c-5.79658,7.35192 -14.48695,11.29088 -14.48695,11.29088z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1800.41212,236.7598c0,0 8.57635,4.25588 14.29688,12.19934c2.19233,3.04425 4.95715,9.34952 4.22577,16.23739c-0.40026,3.76955 -7.8187,15.06642 -18.34677,21.72599c-17.50384,11.0721 -28.65402,11.14163 -28.65402,11.14163h-85.58449c0,0 -7.39225,-16.85602 -21.83622,-30.76999c-13.05119,-12.57229 -33.54373,-20.95827 -38.34868,-22.71866c-12.59555,-4.61461 -41.90201,-7.8157 -41.90201,-7.8157z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <text transform="translate(622.13839,304.6846) scale(1.16505,1.07685)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">DISC</tspan></text>
                    <text transform="translate(556.26874,211.05263) scale(1.26093,1.07685)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">CLASSIC</tspan></text>
                    <text transform="translate(809.4333,211.05263) scale(1.15838,1.07685)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">HIPHOP</tspan></text>
                    <text transform="translate(1029.07698,211.05263) scale(1.15838,1.07685)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">JAZZ</tspan></text>
                    <text transform="translate(1180.2725,211.05263) scale(1.15838,1.07685)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">ROCK</tspan></text>
                    <text transform="translate(1331.93682,211.05263) scale(1.15838,1.07685)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">POPS</tspan></text>
                    <text transform="translate(1472.58381,211.05263) scale(1.15838,1.07685)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">USER</tspan></text>
                    <text transform="translate(1706.06207,213.87871) scale(1.15838,1.07685)" fontSize="40" xmlSpace="preserve" fill="#000000" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">EQ</tspan></text>
                    <text transform="translate(1680.84469,280.33415) scale(1.15838,1.07685)" fontSize="40" xmlSpace="preserve" fill="#000000" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">LOUD</tspan></text>
                    <text transform="translate(496.36775,303.62135) scale(1.16505,1.07685)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">CH</tspan></text>
                    <text transform="translate(487.53093,366.70826) scale(1.0052,0.9291)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">TAG</tspan></text>
                    <text transform="translate(815.5032,303.87458) scale(1.17808,1.17808)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">RND</tspan></text>
                    <text transform="translate(853.32929,369.14399) scale(1.17808,1.17808)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">AF</tspan></text>
                    <text transform="translate(953.98146,368.27442) scale(1.30653,1.17808)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">REG</tspan></text>
                    <text transform="translate(1098.05206,304.4251) scale(1.27169,1.17808)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">RPT</tspan></text>
                    {/* <text transform="translate(1167.61728,365.94449) scale(1.27169,1.17808)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">PTY</tspan></text>
                    <text transform="translate(1067.61728,365.94449) scale(1.27169,1.17808)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">TP</tspan></text> */}
                    <text transform="translate(1258.80077,304.4251) scale(1.14974,1.17808)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">HOLD</tspan></text>
                    <text transform="translate(1389.13383,365.94449) scale(1.26814,1.17808)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">ST</tspan></text>
                    <text transform="translate(1447.48781,365.94449) scale(1.07997,1.17808)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">MO</tspan></text>
                    {/* <text transform="translate(1473.63699,304.4251) scale(1.08922,1.17808)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">HD</tspan></text> */}
                    <text transform="translate(153.63757,369.33023) scale(1.31956,1.1936)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">P</tspan></text>
                    <text transform="translate(67.4265,202.8011) scale(0.70853,0.70853)" fontSize="40" xmlSpace="preserve" fill="url(#displayGradient)" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">Tr</tspan></text>
                    <g fill="url(#displayGradient)" stroke="none" strokeWidth="0">
                        <path d="M695.20927,374.35939l13.75,-35.45455h59.77273l-13.75,35.45455z" />
                        <path d="M694.41382,364.13212l7.15909,-33.40909l3.97727,-3.86364h26.59091l2.7662,4.09202l24.96107,0.68071l-2.46658,3.69086l-49.46524,-0.28177z" />
                    </g>
                    <g fill="url(#displayGradient)" stroke="none" strokeWidth="0">
                        <path d="M1003.95927,304.35938l13.75,-35.45455h59.77273l-13.75,35.45455z" />
                        <path d="M1003.16382,294.13212l7.15909,-33.40909l3.97727,-3.86364h26.59091l2.7662,4.09202l24.96107,0.68071l-2.46658,3.69086l-49.46524,-0.28177z" />
                    </g>
                    <path d="M985.55653,275.32174c1.39262,4.47649 -5.08814,10.47275 -14.47519,13.39304c-9.38705,2.92029 -18.1257,1.65875 -19.51833,-2.81774c-1.39262,-4.47649 5.08814,-10.47275 14.47519,-13.39304c9.38705,-2.92029 18.1257,-1.65875 19.51833,2.81774zM967.96253,281.69791c2.58192,-0.58978 5.72383,-2.07117 5.41837,-4.14285c-0.32572,-2.20914 -3.52958,-3.03774 -6.28571,-2.40816c-2.75613,0.62957 -6.21423,2.53901 -5.77551,5.16327c0.40041,2.39511 4.06093,1.97753 6.64286,1.38775z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M945.10977,286.5005c0.42589,-5.13051 4.89132,-6.27339 4.89132,-6.27339c0,0 -8.11442,17.74181 18.22037,11.93394c35.70317,-7.87396 16.06535,-21.21965 16.06535,-21.21965c0,0 5.55599,-0.69384 8.51588,2.2681c4.75195,4.75525 -0.30159,10.80588 -0.30159,10.80588c0,0 -5.3073,8.71106 -20.69759,12.94063c-4.57823,1.2582 -12.71278,2.44346 -18.7612,-0.2177c-4.77135,-2.09929 -8.23773,-6.56137 -7.93254,-10.2378z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M624.47149,361.01781v-27.05263l40.26316,-10.68421v29.31579c0,0 -4.97972,8.81522 -12.17335,10.82251c-6.55326,1.8286 -15.17364,2.26595 -16.02198,-3.29402c-0.84834,-5.55998 6.2218,-9.97324 11.8897,-11.68091c7.11815,-2.1446 12.11608,1.29046 12.11608,1.29046l-0.05442,-15.7875l-32.58855,7.99032l-0.25476,24.85042c0,0 -7.24134,7.97926 -13.44805,8.67588c-6.20671,0.69662 -11.60309,0.19996 -12.15903,-5.21695c-0.55593,-5.41692 4.94812,-9.37696 10.51815,-10.77152c8.30062,-2.07821 11.91304,1.54236 11.91304,1.54236z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M1062.25958,366.40324c0,-11.19528 0,-34.40264 0,-40.22728c0,-2.60039 3.84455,-5.20842 6.30525,-5.20842c2.00531,0 43.21294,0 58.52273,0c3.47676,0 5.94125,4.57924 5.94125,8.50387c0,6.46414 0,26.53216 0,36.81818c0,3.76269 -2.71316,6.21641 -5.60035,6.21641c-7.75505,0 -43.70228,0 -58.63637,0c-4.03219,0 -6.53252,-2.39127 -6.53252,-6.10277z" fill="url(#displayGradient)" strokeWidth="2" />
                    <path d="M1157.82775,366.40324c0,-11.19528 0,-34.40264 0,-40.22728c0,-2.60039 3.84455,-5.20842 6.30525,-5.20842c2.00531,0 78.07656,0 93.38635,0c3.47676,0 5.94126,4.57924 5.94126,8.50387c0,6.46414 0,26.53216 0,36.81818c0,3.76269 -2.71316,6.21641 -5.60035,6.21641c-7.75505,0 -78.5659,0 -93.49999,0c-4.03219,0 -6.53253,-2.39127 -6.53253,-6.10277z" fill="url(#displayGradient)" strokeWidth="2" />
                    <path d="M1134.72603,319.38356v-0.14285h0.57143v0.14285z" fill="url(#displayGradient)" strokeWidth="0.5" />
                    <path d="M1451.02434,298.10792c0,-11.79477 0,-28.1656 0,-34.86842c0,-5.75659 6.88073,-13.14645 13.55264,-13.14645c14.22724,0 68.58902,0 94.3421,0c8.34356,0 13.68421,9.06704 13.68421,15.64645c0,6.46625 0,20.60493 0,31.44737c0,8.00324 -6.27422,14.21053 -12.5,14.21053c-13.83656,0 -68.59496,0 -94.86842,0c-8.6485,0 -14.21053,-7.22072 -14.21053,-13.28948z" fill="url(#displayGradient)" strokeWidth="2" />
                    <path d="M304.98272,368.56282v-42.65958h9.14894v42.65958z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M287.42954,368.56282v-34.75h9.14894v34.75z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M270.40826,368.56282v-17.63158h9.14894v17.63158z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M253.59975,368.56282v-17.53608l-12.90343,-25.12349h34.81155l-12.75919,25.12349v17.53608zM254.61693,339.96682l-0.03261,-10.44584l-6.73926,0.15216zM268.31289,329.35794l-7.27821,0.14957l0.18025,10.24193z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M356.89689,373.29173v-30.36585l21.82927,17.56098v12.80488z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <path d="M356.89689,333.90147v-13.34657l8.51934,-0.06254l0.08816,-3.54211h5.46512l0.01175,3.52155l7.74491,0.0831v31.39535z" fill="url(#displayGradient)" stroke="none" strokeWidth="0" />
                    <g fill="url(#displayGradient)" strokeWidth="0">
                        <path d="M72.24482,258.5055c0,-6.07492 1.72208,-20.22506 7.59177,-27.76216c5.35224,-6.87265 14.67553,-7.43784 18.90823,-7.43784c3.79991,0 14.33443,1.27431 19.33301,7.08559c6.78512,7.88829 7.66699,21.60854 7.66699,28.31441c0,5.36685 -1.16944,17.67423 -6.17966,24.41254c-5.58193,7.50721 -15.27984,9.18746 -19.92034,9.18746c-5.11108,0 -15.62437,-1.79452 -21.69823,-10.10129c-4.64805,-6.3568 -5.70177,-18.76494 -5.70177,-23.69871zM95.67114,257.73181l-14.5723,11.17173l3.3436,3.63239l11.03856,-8.04708l0.09371,18.61541l19.54995,-14.39369c0,0 -13.82194,-11.06028 -13.82194,-11.08404c0,-0.15916 13.94378,-11.13115 13.94378,-11.13115l-19.61532,-13.67626l-0.01267,17.91267l-11.31579,-7.78947l-3.75178,3.4947z" fill="url(#displayGradient)" />
                        <path d="M100.20342,251.41909v-9.21053l7.36842,4.26316z" stroke="none" />
                        <path d="M100.20342,272.73488v-9.21053l7.36842,4.26316z" stroke="none" />
                    </g>
                    <text transform="translate(1167.61728,365.94449) scale(1.27169,1.17808)" fontSize="40" xmlSpace="preserve" fill="#000" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">PTY</tspan></text>
                    <text transform="translate(1067.61728,365.94449) scale(1.27169,1.17808)" fontSize="40" xmlSpace="preserve" fill="#000" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">TP</tspan></text>
                    <text transform="translate(1473.63699,304.4251) scale(1.08922,1.17808)" fontSize="40" xmlSpace="preserve" fill="#000" stroke="none" strokeWidth="1" fontFamily="&quot;Microsoft YaHei&quot;, &quot;微软雅黑&quot;, STXihei, &quot;华文细黑&quot;" fontWeight="normal" textAnchor="start"><tspan x="0" dy="0">HD</tspan></text>
                </g>
            </g>
        </svg>
    );
}