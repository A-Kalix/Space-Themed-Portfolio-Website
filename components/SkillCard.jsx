import Image from "next/image";

const SkillCard = ({ name, icon }) => (
    <div className="skill-card">
        <Image src={icon} alt={name} width={48} height={48} className="skill-icon" />
        <span className="skill-name">{name}</span>
    </div>
);

export default SkillCard;
