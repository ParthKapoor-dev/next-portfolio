import TextReveal from "@/components/magicui/scrollReveal";

export async function AboutMeReveal({text } : { text : string}) {
  return (
    <div className="">
      <TextReveal text={text} />
    </div>
  );
}
