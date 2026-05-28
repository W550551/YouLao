import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  ShieldCheck,
  MessageSquareText,
  CalendarCheck,
  FileText,
  HeartHandshake,
  Star,
  Smile,
  Wand2,
  Coffee,
  Gift,
  Coins
} from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    title: "把经验变成服务",
    text: `我们帮创作者把"可以聊聊"变成清晰的咨询产品：适合谁、聊什么、多少钱、交付什么。`
  },
  {
    icon: CalendarCheck,
    title: "生成专属有劳主页",
    text: "粉丝可以在你的页面了解服务、提交问题、预约时间，而不是只停留在私信里反复沟通。"
  },
  {
    icon: Sparkles,
    title: "AI 帮双方提前准备",
    text: "咨询前，AI 会整理用户背景、核心问题和建议重点，让每一次沟通都更高效、更认真。"
  },
  {
    icon: FileText,
    title: "留下真正有用的结果",
    text: "咨询后生成行动清单与总结，让用户得到的不只是一次聊天，而是一份可执行的帮助。"
  }
];

const creatorTypes = [
  "AI 工具 / AI 工作流博主",
  "职业发展 / 转行 / 求职博主",
  "设计 / 产品 / 创业博主",
  "自由职业 / 数字游民博主",
  "留学 / 海外生活 / 城市经验博主"
];

const values = [
  "不制造焦虑",
  "不靠沉迷赚钱",
  "不卖虚假的希望",
  "人大于 AI",
  "信任先于规模",
  "让每个人被世界看见"
];

const sampleCards = [
  { title: "AI 工作流诊断", price: "¥399", icon: Wand2, bg: "bg-[#86E3D4]" },
  { title: "职业方向咨询", price: "¥199", icon: Coffee, bg: "bg-[#FFD36E]" },
  { title: "自由职业起步", price: "¥299", icon: Gift, bg: "bg-[#FFB067]" },
  { title: "作品集 Review", price: "¥259", icon: Star, bg: "bg-[#AEE8FF]" }
];

export default function App() {
  return (
    <main className="min-h-screen bg-[#FFF3D3] text-[#4A2E1B]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-5 py-6 md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,180,67,0.42),transparent_26%),radial-gradient(circle_at_90%_5%,rgba(134,227,212,0.38),transparent_24%),radial-gradient(circle_at_50%_90%,rgba(255,211,110,0.42),transparent_34%)]" />
        <div className="absolute left-8 top-32 h-20 w-20 rounded-[2rem] bg-[#FFD36E]/60 blur-2xl" />
        <div className="absolute bottom-20 right-14 h-24 w-24 rounded-full bg-[#86E3D4]/50 blur-2xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-[1.4rem] border-4 border-[#4A2E1B] bg-[#FFD36E] shadow-[4px_4px_0_#4A2E1B]">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-black tracking-tight">有劳 Yorozuya</p>
              <p className="text-sm font-semibold text-[#7A5738]">让被信任的人，真正帮到需要的人</p>
            </div>
          </div>
          <a href="#join" className="hidden rounded-full border-3 border-[#4A2E1B] bg-white/70 px-5 py-2 text-sm font-bold shadow-[3px_3px_0_#4A2E1B] hover:translate-y-0.5 hover:shadow-[2px_2px_0_#4A2E1B] md:block">
            加入第一批创作者
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border-3 border-[#4A2E1B] bg-white/80 px-4 py-2 text-sm font-bold shadow-[3px_3px_0_#4A2E1B]">
              <Sparkles className="h-4 w-4" />
              把声望变成真实帮助
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              帮创作者开出自己的「有劳小店」。
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[#6C4A2E] md:text-xl">
              有劳 Yorozuya 帮助博主、独立创作者和专业人士，把粉丝的信任转化为清晰、体面、可交付的 1-on-1 咨询服务。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#join"
                className="inline-flex h-13 items-center rounded-[1.35rem] border-3 border-[#4A2E1B] bg-[#FF9F2E] px-7 text-base font-black text-white shadow-[5px_5px_0_#4A2E1B] hover:bg-[#FFB24D] hover:translate-y-0.5 hover:shadow-[3px_3px_0_#4A2E1B] transition-all"
              >
                申请加入 MVP <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-13 items-center rounded-[1.35rem] border-3 border-[#4A2E1B] bg-white/70 px-7 text-base font-black text-[#4A2E1B] shadow-[5px_5px_0_#4A2E1B] hover:bg-white hover:translate-y-0.5 hover:shadow-[3px_3px_0_#4A2E1B] transition-all"
              >
                看看怎么运作
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto w-full max-w-[420px] rounded-[3rem] border-[10px] border-[#3B2719] bg-[#FFF8E8] p-5 shadow-[12px_12px_0_rgba(74,46,27,0.25)]"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-4xl font-black tracking-tight">有劳</p>
                <p className="text-sm font-bold text-[#7A5738]">Yorozuya</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#4A2E1B] bg-white">
                <Smile className="h-6 w-6" />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {["AI", "职业", "设计", "生活"].map((item) => (
                <div key={item} className="rounded-[1.2rem] bg-[#FFE6A3] p-3 text-center shadow-inner">
                  <div className="mx-auto mb-2 h-7 w-7 rounded-full bg-white/70" />
                  <p className="text-sm font-black">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[2rem] border-4 border-[#4A2E1B] bg-[#FF9F2E] p-5 text-white shadow-[5px_5px_0_#4A2E1B]">
              <p className="text-3xl font-black leading-tight">帮我理清 AI 工作流</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FFF3D3] px-4 py-2 font-black text-[#4A2E1B]">
                <Coins className="h-5 w-5" /> ¥399 / 60分钟
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {sampleCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className={`${card.bg} min-h-[150px] rounded-[1.8rem] border-4 border-[#4A2E1B] p-4 shadow-[4px_4px_0_#4A2E1B]`}>
                    <Icon className="mb-3 h-8 w-8" />
                    <p className="text-xl font-black leading-tight">{card.title}</p>
                    <div className="mt-4 inline-flex rounded-full bg-white/75 px-3 py-1 text-sm font-black">{card.price}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 三栏价值卡片 ── */}
      <section className="px-5 py-12 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border-4 border-[#4A2E1B] bg-white/80 text-[#4A2E1B] shadow-[6px_6px_0_#4A2E1B] p-6">
            <Users className="mb-4 h-8 w-8" />
            <h3 className="text-2xl font-black">给创作者</h3>
            <p className="mt-3 font-medium leading-7 text-[#6C4A2E]">不用做课程、不用硬广，把粉丝常问你的问题变成清晰的咨询服务。</p>
          </div>
          <div className="rounded-[2rem] border-4 border-[#4A2E1B] bg-[#86E3D4] text-[#4A2E1B] shadow-[6px_6px_0_#4A2E1B] p-6">
            <ShieldCheck className="mb-4 h-8 w-8" />
            <h3 className="text-2xl font-black">给粉丝</h3>
            <p className="mt-3 font-medium leading-7 text-[#4A2E1B]">不是继续刷内容，而是向你已经信任的人，购买一次认真、具体、个性化的帮助。</p>
          </div>
          <div className="rounded-[2rem] border-4 border-[#4A2E1B] bg-[#FFD36E] text-[#4A2E1B] shadow-[6px_6px_0_#4A2E1B] p-6">
            <Sparkles className="mb-4 h-8 w-8" />
            <h3 className="text-2xl font-black">AI 辅助</h3>
            <p className="mt-3 font-medium leading-7 text-[#4A2E1B]">AI 负责减少摩擦、整理问题、提升效率；真正的产品和服务，依然是人。</p>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#A26B2F]">How it works</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">从一条私信，到一次真正有用的帮助。</h2>
            <p className="mt-5 text-lg font-medium leading-8 text-[#6C4A2E]">
              有劳不是让用户沉迷的平台。我们希望每一次连接，都更清楚、更温暖、更值得信任。
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-[2rem] border-4 border-[#4A2E1B] bg-white/80 text-[#4A2E1B] shadow-[5px_5px_0_#4A2E1B] p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <Icon className="h-8 w-8" />
                    <span className="rounded-full bg-[#FF9F2E] px-3 py-1 text-sm font-black text-white">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-[#6C4A2E]">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Who it is for ── */}
      <section className="bg-[#FFF8E8] px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#A26B2F]">Who it is for</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">适合小而真实、有信任感的创作者。</h2>
            <p className="mt-5 text-lg font-medium leading-8 text-[#6C4A2E]">
              第一批 MVP 不追求大 V。我们更想找到那些已经被一小群人信任、经常收到请教、但还没有把经验产品化的人。
            </p>
          </div>
          <div className="grid gap-3">
            {creatorTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 rounded-[1.4rem] border-4 border-[#4A2E1B] bg-white p-4 shadow-[4px_4px_0_#4A2E1B]">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <span className="font-black">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform philosophy ── */}
      <section className="px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border-4 border-[#4A2E1B] bg-[#FFB067] p-8 shadow-[8px_8px_0_#4A2E1B] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-white/80">Platform philosophy</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">人大于 AI，信任先于规模。</h2>
              <p className="mt-5 text-lg font-bold leading-8 text-white/90">
                平台不应该靠困住用户赚钱。AI 应该帮人更像人：更高效地理解、更认真地连接、更温柔地互相帮助。
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-[1.4rem] border-3 border-[#4A2E1B] bg-white/90 p-4 font-black shadow-[3px_3px_0_#4A2E1B]">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MVP CTA ── */}
      <section id="join" className="px-5 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border-4 border-[#4A2E1B] bg-white/80 p-8 text-center shadow-[8px_8px_0_#4A2E1B] md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#A26B2F]">MVP cohort</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">寻找第一批 10 位创作者。</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-[#6C4A2E]">
            我们会手把手帮你设计咨询产品、搭建有劳主页、整理用户问题，并完成第一批付费咨询验证。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@yorozuya.example?subject=我想加入有劳 Yorozuya 创作者 MVP"
              className="inline-flex h-13 items-center rounded-[1.35rem] border-3 border-[#4A2E1B] bg-[#FF9F2E] px-7 text-base font-black text-white shadow-[5px_5px_0_#4A2E1B] hover:bg-[#FFB24D] hover:translate-y-0.5 hover:shadow-[3px_3px_0_#4A2E1B] transition-all"
            >
              申请加入 <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <p className="text-sm font-bold text-[#8A6847]">之后可以替换成飞书表单 / 腾讯问卷 / Tally 链接。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
