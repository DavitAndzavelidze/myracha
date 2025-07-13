// components/Icon.tsx
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
import { IconType } from "react-icons";

interface IconProps {
  name: string;
  className?: string;
}

// Map of known icon aliases or alternative names
const iconAliases: Record<string, string> = {
  "fa-parking": "faParking", // Example of an alias
  "fa-towel": "giTowel", // Use Game Icon for towel
  "fa-washing-machine": "giWashingMachine",
  "fa-heater": "luHeater",
  "fa-hair-dryer": "piHairDryer",
};

export default function Icon({ name, className }: IconProps) {
  if (!name) return null;

  // Check if this icon has an alias first
  const aliasedName = iconAliases[name];
  if (aliasedName) {
    name = aliasedName;
  }

  // Extract library prefix and icon name
  let prefix: string;
  let iconName: string;

  // Check if name contains a hyphen (like "gi-abacus")
  if (name.includes("-")) {
    const parts = name.split("-");
    const firstPart = parts[0].toLowerCase();

    // Check if the first part is a valid icon library prefix
    if (["fa", "gi", "lu", "pi", "tb", "md"].includes(firstPart)) {
      prefix = firstPart;
      iconName = parts.slice(1).join("-"); // Join remaining parts with hyphens
    } else {
      // If first part is not a valid prefix, assume it's fa
      prefix = "fa";
      iconName = name;
    }
  } else {
    // Handle camelCase names (like "giAbacus")
    const match = name.match(/^([a-z]{2})(.+)$/);
    if (match && ["fa", "gi", "lu", "pi", "tb", "md"].includes(match[1])) {
      prefix = match[1];
      iconName = match[2];
    } else {
      // Fallback: assume it's a plain icon name without prefix
      prefix = "fa";
      iconName = name;
    }
  }

  // Convert iconName to PascalCase
  const pascalIconName = toPascalCase(iconName);

  // Build the expected component name
  const expectedComponentName = `${prefix.charAt(0).toUpperCase()}${prefix.slice(1)}${pascalIconName}`;

  // Determine which icon library to use
  let IconComponent: IconType | undefined;

  try {
    switch (prefix.toLowerCase()) {
      case "fa":
        IconComponent = FaIcons[expectedComponentName as keyof typeof FaIcons];
        if (!IconComponent) {
          console.log(
            `Available FA icons starting with "Fa${pascalIconName.slice(0, 3)}":`,
            Object.keys(FaIcons).filter((key) =>
              key.startsWith(`Fa${pascalIconName.slice(0, 3)}`)
            )
          );
        }
        break;
      case "gi":
        IconComponent = GiIcons[expectedComponentName as keyof typeof GiIcons];
        if (!IconComponent) {
          // Log all available GI icons for debugging
          console.log(
            `All GI icons containing "abacus":`,
            Object.keys(GiIcons).filter((key) =>
              key.toLowerCase().includes("abacus")
            )
          );
          console.log(
            `All GI icons containing "calc":`,
            Object.keys(GiIcons).filter((key) =>
              key.toLowerCase().includes("calc")
            )
          );
          console.log(
            `Available GI icons starting with "Gi${pascalIconName.slice(0, 3)}":`,
            Object.keys(GiIcons).filter((key) =>
              key.startsWith(`Gi${pascalIconName.slice(0, 3)}`)
            )
          );
        }
        break;
      case "lu":
        IconComponent = LuIcons[expectedComponentName as keyof typeof LuIcons];
        if (!IconComponent) {
          console.log(
            `Available LU icons starting with "Lu${pascalIconName.slice(0, 3)}":`,
            Object.keys(LuIcons).filter((key) =>
              key.startsWith(`Lu${pascalIconName.slice(0, 3)}`)
            )
          );
        }
        break;
      case "pi":
        IconComponent = PiIcons[expectedComponentName as keyof typeof PiIcons];
        if (!IconComponent) {
          console.log(
            `Available PI icons starting with "Pi${pascalIconName.slice(0, 3)}":`,
            Object.keys(PiIcons).filter((key) =>
              key.startsWith(`Pi${pascalIconName.slice(0, 3)}`)
            )
          );
        }
        break;
      case "tb":
        IconComponent = TbIcons[expectedComponentName as keyof typeof TbIcons];
        if (!IconComponent) {
          console.log(
            `Available TB icons starting with "Tb${pascalIconName.slice(0, 3)}":`,
            Object.keys(TbIcons).filter((key) =>
              key.startsWith(`Tb${pascalIconName.slice(0, 3)}`)
            )
          );
        }
        break;
      case "md":
        IconComponent = MdIcons[expectedComponentName as keyof typeof MdIcons];
        if (!IconComponent) {
          console.log(
            `Available MD icons starting with "Md${pascalIconName.slice(0, 3)}":`,
            Object.keys(MdIcons).filter((key) =>
              key.startsWith(`Md${pascalIconName.slice(0, 3)}`)
            )
          );
        }
        break;
      default:
        // Try FontAwesome by default if no prefix
        IconComponent =
          FaIcons[`Fa${pascalIconName}` as keyof typeof FaIcons] ||
          GiIcons[`Gi${pascalIconName}` as keyof typeof GiIcons];
    }
  } catch (error) {
    console.warn(`Error loading icon "${name}":`, error);
  }

  if (!IconComponent) {
    console.warn(
      `Icon "${expectedComponentName}" not found in ${prefix.toUpperCase()} library`
    );
    return null;
  }

  return <IconComponent className={className} />;
}

// Helper function to convert kebab-case to PascalCase
function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
